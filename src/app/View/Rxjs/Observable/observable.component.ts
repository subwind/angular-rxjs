import { Component, OnInit,AfterViewInit,ViewChild, ElementRef  } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject,AsyncSubject,of,interval,timer,fromEvent,from  } from 'rxjs';
import { take,takeUntil, map,zip } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  @ViewChild('btnTest') button:ElementRef;

  constructor() { }

  ngOnInit() {
     /**Observables */
    this.useObservable();

    /**Subject */
    this.useSubject();

    /**ReplaySubject  */
    this.useReplaySubject();

    /**BehaviorSubject*/
    this.useBehaviorSubject();

    /**AsyncSubject  */
    this.useAsyncSubject();

    /**Use Interval */
    this.useInterval();
  }

  ngAfterViewInit(){
    let buttonStream$ = fromEvent(this.button.nativeElement, 'click')
        .subscribe(res => console.log(res));
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
    //observable.subscribe(v => console.log(v),error=>console.log(error),()=>console.log('Observable complete?'));
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

    of(1,2,3,4)
    .pipe(
      take(2),
      map(val => val + 2)
    ).subscribe((value)=>{console.log(value)});
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

  /**利用AsyncSubject */
  public useAsyncSubject():void{
    const asyncSubject = new AsyncSubject();

    asyncSubject.next('hello initial value from AsyncSubject');
    asyncSubject.next('hello 1st value from AsyncSubject'); 

    asyncSubject.subscribe(v=>{
      this.createDomElm('div','#asyncSubject',v.toString());
      console.log(v);
    });

    asyncSubject.next('hello 2nd value from AsyncSubject'); 
    asyncSubject.complete();

     
  }

  /**Observable.interval 測試 */
  public useInterval():void{
    let source = interval(1000);
    /**Use  takeUntil & timer*/
    source.pipe(takeUntil(timer(5000)),map(x=>x+1)).subscribe(newX=>{
      console.log(newX);
    })
    /** Use take*/
    source.pipe(take(3),map(x=>x+1)).subscribe(newX=>{
      console.log(newX);
    })

  }

  /**利用from 和 zip 組成一個動態產生值的功能 */
  public useZip():void{
    from([1,2,3,4]).pipe(zip(interval(500),(x,y)=>x)).subscribe((value)=>{console.log('x',value)});
  }

  /** 建立DOM元素 */
  public createDomElm(tag:string,target:string,value:string):void{
    let $div= document.createElement(tag);
    let $elm = document.querySelector(target);
    $div.innerHTML=value;
    $elm.appendChild($div);    
  }

}
