import { Component, OnInit } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public name: string = "";

  constructor() { }

  ngOnInit() {
    this.name = 'Angular';
    /**Observables */
    //Observable.create() and new Observable() essentially do the same thing.
    const observable = new Observable(observer => {
      observer.next('hello from Observable!!----first');
      setTimeout(() => observer.next('hello from Observable!'), 1000);
      observer.next('hello from Observable!!----second');
      observer.complete()
    });

    /** method - 1 */
    //observable.subscribe(v => console.log(v),error=>console.log(error),()=>console.log('Observable complete'));

    /** method - 2 */
    let observer = {
      next: function (value) {
        console.log(value);
      },
      error: function (error) {
        console.log(error)
      },
      complete: function () {
        console.log('Observable complete')
      }
    }

    observable.subscribe(observer);


    /**Subject */
    const subject = new Subject();

    subject.next('missed message from Subject');

    subject.subscribe(v => console.log(v));

    subject.next('hello from subject!');


    /**ReplaySubject  */
    const replaySubject = new ReplaySubject();

    replaySubject.next('hello from ReplaySubject!');

    replaySubject.next('hello from second event from ReplaySubject!');

    replaySubject.subscribe(v => console.log(v));

    /**BehaviorSubject*/
    const behaviorSubject = new BehaviorSubject('hello initial value from BehaviorSubject');

    behaviorSubject.subscribe(v => console.log(v));

    behaviorSubject.next('hello again from BehaviorSubject');

  }

}
