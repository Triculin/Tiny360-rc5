import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SharedModule} from './../shared.module';
import {FormComponent } from './form.component';
@NgModule({
  imports: [
    BrowserModule,SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
  FormComponent
  ],
})
export class FormModule {
}