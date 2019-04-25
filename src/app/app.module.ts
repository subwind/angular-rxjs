import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ObservableComponent } from './View/Rxjs/Observable/observable.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:[ BrowserModule, FormsModule,AppRoutingModule],
  declarations:[ AppComponent,HelloComponent, ObservableComponent],
  bootstrap:[ AppComponent],
  providers:[{ provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
