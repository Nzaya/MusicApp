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

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router){}

  
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      
      //REtrieve from DB
      this.authService.login(this.loginForm.value)
        .subscribe({next: (response) => {
          this.router.navigateByUrl('/dashboard')
        }, error: (err) => console.log(err)
      })

    } else{      
      //trow error using toaster and with require field
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your Form is invalid")
    }
  }

}
