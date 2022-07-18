import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailName: string = ''
  password: string = ''

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmitForm(productForm : any){
    console.log(productForm);
  }

}
