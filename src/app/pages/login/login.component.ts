import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  constructor(private router:Router, private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  logUser(){
    const body:User={
      email:this.form.controls['email'].value,
      password:this.form.controls['password'].value
    }
    console.log(body);
    
    this.authService.login(body).subscribe(res=>{
      console.log(res);
      
    })
  }
  goToRegister(){
    this.router.navigate(['/register'])
  }

}
