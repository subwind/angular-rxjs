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
    /**Observables */
    this.useObservable();

    /**Subject */
    this.useSubject();

    /**ReplaySubject  */
    this.useReplaySubject();

    /**BehaviorSubject*/
    this.useBehaviorSubject();

  }

  /** 利用Observable */
  public useObservable():void{
    //Observable.create() and new Observable() essentially do the same thing.
    const observable = new Observable(observer => {
      observer.next('hello from Observable!!----first');
      setTimeout(() => observer.next('hello from Observable!'), 100);
      observer.next('hello from Observable!!----second');
      observer.complete()
    });

    /** method - 1 */
    //observable.subscribe(v => console.log(v),error=>console.log(error),()=>console.log('Observable complete'));
    let observer = {
      next:  (value) => {
        this.createDomElm('div','#observable',value);     
        console.log(value);
      },
      error:  (error) => {
        console.log(error)
      },
      complete:  () => {
        this.createDomElm('div','#observable','Observable complete!!</br></br>');  
        console.log('Observable complete')
      }
    }

    observable.subscribe(observer);

    /**Observables use of*/ 
    const observable2 = of('Observables use of 1','Observables use of 2'); 
    observable2.subscribe(observer)

  }

  /** 利用Subject */
  public useSubject():void{
    const subject = new Subject();

    subject.next('missed message from Subject');

    subject.subscribe(v => {
      this.createDomElm('div','#subject',v.toString());
      console.log(v)
    });
    subject.next('hello from subject!');
  }

  /** 利用ReplaySubject*/
  public useReplaySubject():void{
    const replaySubject = new ReplaySubject();

    replaySubject.next('hello from ReplaySubject!');

    replaySubject.next('hello from second event from ReplaySubject!');

    replaySubject.subscribe(v => {
      this.createDomElm('div','#replaySubject',v.toString());
      console.log(v);
    });
  }

  /** 利用BehaviorSubject*/
  public useBehaviorSubject():void{
    const behaviorSubject = new BehaviorSubject('hello initial value from BehaviorSubject');

    behaviorSubject.subscribe(v => {
      this.createDomElm('div','#behaviorSubject',v.toString());
      console.log(v);
    });

    behaviorSubject.next('hello again from BehaviorSubject');
  }

  public createDomElm(tag:string,target:string,value:string):void{
    let $div= document.createElement(tag);
    let $elm = document.querySelector(target);
    $div.innerHTML=value;
    $elm.appendChild($div);    
  }

}
