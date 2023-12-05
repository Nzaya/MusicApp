import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  signUpForm! : FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSignUp(){
    if(this.signUpForm.valid){
      //send to db
      this.auth.signUp(this.signUpForm.value)
      .subscribe({next:(res => {
        alert(res.message)
      }), error: (err => {
        alert(err?.error.message)
      })
    })
          console.log(this.signUpForm.value);

    }else {
      ValidateForm.validateAllFormFields(this.signUpForm)
      alert("Your form is invalid")
    }
  }

}
