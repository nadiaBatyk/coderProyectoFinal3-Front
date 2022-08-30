import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
class UserImage {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  userImage!: UserImage;
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
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone:['',Validators.required]
    });
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.userImage = new UserImage(reader.result as string, file);
    };
  }
  createUser() {
    const fd = new FormData();
    fd.append('userImage', this.userImage.file);
    fd.append('name', this.form.controls['name'].value),
      fd.append('email', this.form.controls['email'].value),
      fd.append('password', this.form.controls['password'].value);

    this.authService.register(fd).subscribe(
      (res) => {
        this.error=false;
        this.router.navigate(['/welcome']);
      },
      (err) => (this.error = true)
    );
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
