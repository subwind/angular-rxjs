import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-observable',
  templateUrl:'./app.observable.component.html',
})
export class AppObservableComponent {
  public name: string = "";

  constructor() {
   }

   ngOnInit(){
     this.name = "Angular Observable!"
   }
}