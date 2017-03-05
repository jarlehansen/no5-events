import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {

 events: String[] = [];

  constructor(private http: Http) {
    this.events[0] = 'test1';
    this.events[1] = 'test2';
    this.events[2] = 'test3';
  }

  getEvents(): String[] {
    console.log('EventService');
    this.http.get('https://no5-events-publisher.herokuapp.com/events').map(this.extractData);
    return this.events;
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('body:' + body);
    return body.data || { };
  }

}
