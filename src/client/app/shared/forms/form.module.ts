import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedModule} from './../shared.module';
import {FormComponent } from './form.component';

import { ControlMessagesComponent } from './control-messages.component';
import { ValidationService } from './validation.service';

@NgModule({
  imports: [
    BrowserModule,SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ControlMessagesComponent,FormComponent
  ],
  providers: [ ValidationService ],

})
export class FormModule {
}