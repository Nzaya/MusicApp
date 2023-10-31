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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);

      //send to db
      this.authService.signUp(this.signUpForm.value)
      .subscribe((response) => {
        console.log("here",response.statusCode);
        // this.router.navigateByUrl('/login')
      },err => console.log(err)
      )
    }else {
      ValidateForm.validateAllFormFields(this.signUpForm)
      alert("Your form is invalid")
    }
  }

}
