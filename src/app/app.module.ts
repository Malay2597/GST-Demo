import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './home/home.module';
import {CoreModule} from './core/core.module';
import {addCategoryModule} from './addCategory/addCategory.module';
import {showGstModule} from './showGst/showGst.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    addCategoryModule,
    showGstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
