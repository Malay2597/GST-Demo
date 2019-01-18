import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import {HomeRoutingModule} from './home-routing.module'

import {HomeComponent} from './home.component'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports:[CommonModule,
        FormsModule,
        RouterModule,
        HomeRoutingModule],
   exports:[HomeComponent]
  })
  export class HomeModule { }