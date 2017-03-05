import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import {EventService} from "../../providers/event-service";
import {EventDetailsPage} from "../event-details/event-details";


@Component({
  templateUrl: 'events.html',
  providers: [EventService]
})
export class EventsPage {

  events: String[] = [];

  constructor(private http: Http, private eventService:EventService, private navControl: NavController) {
    console.log('EventsPage');
    console.log(eventService.getEvents());

    http.get('https://no5-events-publisher.herokuapp.com/events').map(res => res.json()).subscribe(data => {
      this.events = data;
    });
  }

  eventSelected(event) {
    this.navControl.push(EventDetailsPage, {title: event.title, eventInfo: event.eventInfo, eventUrl: event.eventUrl});
  }

}
