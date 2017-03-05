import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})
export class EventDetailsPage {

  title: String = "";
  eventInfo: String = "";
  eventUrl: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get("title");
    this.eventInfo = this.navParams.get("eventInfo");
    this.eventUrl = this.navParams.get("eventUrl");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

}
