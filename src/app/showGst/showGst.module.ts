import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {RouterModule } from '@angular/router';

import {showGstRoutingModule} from './showGst-routing.module'
import {showGstComponent} from './showGst.component'

@NgModule({
    declarations: [
        showGstComponent
    ],
    imports:[CommonModule,
        FormsModule,
        RouterModule,
        showGstRoutingModule],
   exports:[showGstComponent]
  })
  export class showGstModule { }