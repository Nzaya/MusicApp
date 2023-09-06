import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  
  loginForm!: FormGroup;

  constructor(private fb:FormBuilder){}

  
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      
      //Send the obj to db
    } else{      
      //trow error using toaster and with require field
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your Form is invalid")
    }
  }

}
