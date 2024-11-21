import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    reqpwd:string="";
    loginform: FormGroup=new FormGroup({})

    constructor(private route:Router,private fb:FormBuilder){
      this.loginform=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      })
    }

    checklogin()
    {
      this.reqpwd=this.loginform.value.username.slice(0,3)+'123';
      if(this.reqpwd==this.loginform.value.password)
      {
        alert("Login success");
        this.route.navigateByUrl('/user')
      }
    }
}
