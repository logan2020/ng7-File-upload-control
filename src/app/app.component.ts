import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'File-Upload';

  signInForm : FormGroup;

  constructor(private fb: FormBuilder){
    this.signInForm = fb.group({
      email: this.fb.control('email'),
      file: this.fb.control('',Validators.required)
    });
  }
  
  onSubmit(signInForm){
    console.log(signInForm);
  }
}
