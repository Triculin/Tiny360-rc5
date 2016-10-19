import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog.component';
import { SharedModule  } from '../shared.module';
@NgModule({
    imports: [SharedModule,FormsModule],
    declarations: [DialogComponent],
    exports: [DialogComponent]
})
export class DialogModule {}
