import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {SharedModule  } from '../../shared/shared.module';
import { ControlMessagesComponent } from './control-messages.component';
import {    SelectModule   } from 'angular2-select';
import { DialogComponent} from './dialog.component';
import { ValidationService } from './validation.service';
import {Validationservice1} from './formvalidate';

@NgModule({
  imports: [
    BrowserModule,SharedModule,SelectModule
  ],
  declarations: [
  DialogComponent,
  ],
  exports: [
  DialogComponent
  ],
})
export class DialogModule {
}