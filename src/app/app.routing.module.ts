import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { AppObservableComponent} from './View/Rxjs/Observable/app.observable.component';

@NgModule({
  declarations: [ 
    AppComponent,AppObservableComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'index', component: AppComponent },
      { path:'observable',component:AppObservableComponent},
      { path: '**', redirectTo: 'index' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}