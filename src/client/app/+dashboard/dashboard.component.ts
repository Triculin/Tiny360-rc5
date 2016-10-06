import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'ap-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {
  loginForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    this.loginForm = this._formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  onLoginFormSubmit(){}
}
