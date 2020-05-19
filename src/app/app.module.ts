import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './singlePage/p1/p1.component';
import { P2Component } from './singlePage/p2/p2.component';
import { P3Component } from './singlePage/p3/p3.component';
import { P4Component } from './singlePage/p4/p4.component';
import { P5Component } from './singlePage/p5/p5.component';
import { P6Component } from './singlePage/p6/p6.component';
import { P7Component } from './singlePage/p7/p7.component';
import { P8Component } from './singlePage/p8/p8.component';
import { P9Component } from './singlePage/p9/p9.component';
import { P10Component } from './singlePage/p10/p10.component';
import { P0Component } from './singlePage/p0/p0.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  { path: '', component: HomeComponentComponent},
  { path: '0', component: P0Component},
  { path: '1', component: P1Component},
  { path: '2', component: P2Component},
  { path: '3', component: P3Component},
  { path: '4', component: P4Component},
  { path: '5', component: P5Component},
  { path: '6', component: P6Component},
  { path: '7', component: P7Component},
  { path: '8', component: P8Component},
  { path: '9', component: P9Component},
  { path: '10', component: P10Component},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    P6Component,
    P7Component,
    P8Component,
    P9Component,
    P10Component,
    P0Component,
    HeaderComponent,
    P1Component
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
