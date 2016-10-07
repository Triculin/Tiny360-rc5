import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';
import {HttpService} from "../../services/http-service";
import{SharedModule} from '../shared.module';
@NgModule({
    imports: [SharedModule],
    declarations: [DialogComponent],
    exports: [DialogComponent]
})
export class DialogModule { }