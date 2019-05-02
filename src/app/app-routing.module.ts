import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './View/Rxjs/Observable/observable.component';

const routes: Routes = [
  { path: 'observable', component: ObservableComponent },
  { path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule { }