import {Component, ViewChild} from "@angular/core";
import {Platform, Nav, AlertController} from "ionic-angular";
import {StatusBar, Push, Splashscreen} from "ionic-native";
import {TabsPage} from "../pages/tabs/tabs";
import {DetailsPage} from "../pages/details/details";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class Ionic2PushApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  constructor(public platform: Platform,
              public alertCtrl: AlertController) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.initPushNotification();
    });
  }

  initPushNotification(){
    if (!this.platform.is('cordova')) {
      console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
      return;
    }
    let push = Push.init({
      ios: {
        alert: "true",
        badge: false,
        sound: "true"
      }
    });

    push.on('registration', (data) => {
      console.log("device token ->", data.registrationId);
      //TODO - send device token to server

    });
    push.on('notification', (data) => {
      console.log('message', data.message);
      let self = this;
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              self.nav.push(DetailsPage, {message: data.message});
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        self.nav.push(DetailsPage, {message: data.message});
        console.log("Push notification clicked");
      }
    });
    push.on('error', (e) => {
      console.log(e.message);
    });
  }
}

