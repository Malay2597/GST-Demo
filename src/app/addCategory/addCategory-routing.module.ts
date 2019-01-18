import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {addCategoryComponent} from './addCategory.component';

const routes: Routes = [
    {path:"add",component:addCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class addCategoryRoutingModule { }
