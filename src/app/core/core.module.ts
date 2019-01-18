import {NgModule} from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import {GstService} from './gst.services'

@NgModule({
    imports:[HttpClientModule],
    providers:[GstService]
  })
  export class CoreModule { }