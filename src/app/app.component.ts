import { Component, OnInit } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject,of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public name: string = "";

  constructor() { }

  ngOnInit() {
    this.name = 'Angular Rxjs';
  }
  
}
