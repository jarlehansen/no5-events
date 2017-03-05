import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {TabsPage} from "../pages/tabs/tabs";
import {Ionic2PushApp} from "./app";
import {EventsPage} from "../pages/events/events";
import {AboutPage} from "../pages/about/about";
import {EventDetailsPage} from "../pages/event-details/event-details";

import {EventService} from "../providers/event-service";


@NgModule({
  declarations: [
    Ionic2PushApp,
    TabsPage,
    EventsPage,
    AboutPage,
    EventDetailsPage
  ],
  imports: [
    IonicModule.forRoot(Ionic2PushApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Ionic2PushApp,
    TabsPage,
    EventsPage,
    AboutPage,
    EventDetailsPage
  ],
  providers: [
    EventService
  ]
})
export class AppModule {
}
