import { Component } from '@angular/core';
import { DialogComponent } from '../shared/dialog/dialog.component';

/**
 * This class represents the lazy loaded StaffComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ap-staff',
   directives : [DialogComponent],
  templateUrl: 'staff.component.html',
  styleUrls: ['staff.component.css']
})
export class StaffComponent { }
