import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  error: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  logUser() {
    const body: User = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };

    this.authService.login(body).subscribe(
      (res) => {
        this.error=false;
        this.router.navigate(['/welcome']);

      },
      (err) => (this.error = true)
    );
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
