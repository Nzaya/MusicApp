import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router){}



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      //Send the obj to db
      this.auth.login(this.loginForm.value).subscribe({next:(res) => {
        this.auth.loggedIn.next(true)
        alert(res.message)
        this.router.navigate(['/dashboard'])
      }, error: (err) => {
        alert(err?.error?.message)
      } })


    } else{
      //trow error using toaster and with require field
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your Form is invalid")
    }
  }

}
