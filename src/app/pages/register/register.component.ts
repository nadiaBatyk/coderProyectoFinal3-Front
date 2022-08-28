import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup;
  constructor(private router:Router, private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.form=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  createUser(){
    const body:User={
      name:this.form.controls['name'].value,
      email:this.form.controls['email'].value,
      password:this.form.controls['password'].value
    }
    console.log(body);
    
    this.authService.register(body).subscribe(res=>{
      console.log(res);
      
    })
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }

}
