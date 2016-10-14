import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {SharedModule  } from '../../shared/shared.module';
import { ControlMessagesComponent } from './control-messages.component';
import { DynamicCmp} from './dialog';
import { ValidationService } from './validation.service';

@NgModule({
  imports: [
    BrowserModule,SharedModule
  ],
  declarations: [
  DynamicCmp
  ],
  exports: [
  DynamicCmp
  ],
})
export class DialogModule {
}