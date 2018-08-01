import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import 'rxjs/add/operator/map';

import {FeedsService} from '../app/feeds.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  feeds;

  constructor(private serv:FeedsService) {
    let feeds = this.serv.getRSS();
    feeds.subscribe(data => { this.feeds = data; }) 
    console.log(this.feeds);
  }
  
  

}