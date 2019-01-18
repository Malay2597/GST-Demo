import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {showGstComponent} from './showGst.component';

const routes: Routes = [
    {path:"show",component:showGstComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class showGstRoutingModule { }
