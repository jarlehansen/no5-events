import {Component} from "@angular/core";
import {EventsPage} from "../events/events";
import {AboutPage} from "../about/about";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;

  constructor() {
    this.tab1Root = EventsPage;
    this.tab2Root = AboutPage;
  }
}
