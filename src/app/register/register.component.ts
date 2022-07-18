import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
// import { CustomValidators } from './confirm';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }
}



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  productForm: FormGroup;

  constructor() {
    this.productForm=new FormGroup({
      yourName:new FormControl('doaa', Validators.required),
      yourEmail:new FormControl('',[Validators.required,Validators.pattern('([a-z0-9]+@[a-z]+\.[a-z]{2,3})')]),
      userName:new FormControl('',[Validators.required,Validators.pattern(".*\\S.*[a-zA-z0-9_-]")]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$")]),
      confpassword:new FormControl('',Validators.required)},
      [CustomValidators.MatchValidator('password', 'confpassword')]
     


      )
   }

  ngOnInit(): void {
  
   

  }
 
  handleFormSubmit() {
    console.log(this.productForm);
   
    
  }
  get passwordMatchError() {
    console.log("sdfgh");
    return (
      this.productForm.getError('mismatch') &&
      this.productForm.get('confpassword')?.touched
    );
   
  }

}
