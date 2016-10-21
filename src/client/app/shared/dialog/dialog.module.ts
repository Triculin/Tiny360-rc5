import {    NgModule    } from '@angular/core';
import {    FormsModule    } from '@angular/forms';
import {    SelectModule   } from 'angular2-select';
import {    DialogComponent    } from './dialog.component';
import {    SharedModule    } from '../shared.module';
import {    ReactiveFormsModule    } from '@angular/forms';
@NgModule({
    imports: [  SharedModule,FormsModule,SelectModule,ReactiveFormsModule   ],
    declarations: [  DialogComponent  ],
    exports: [  DialogComponent  ]
})
export class DialogModule {}
