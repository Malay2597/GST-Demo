import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {addCategoryComponent} from './addCategory.component'
import {addCategoryRoutingModule} from './addCategory-routing.module'

@NgModule({
    declarations: [
        addCategoryComponent
    ],
    imports:[CommonModule,
        FormsModule,
        addCategoryRoutingModule],
   exports:[addCategoryComponent]
  })
  export class addCategoryModule { }