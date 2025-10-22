import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/users';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private _userservice = inject(UserService);
  private _router = inject(Router);

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl<number | null>(null), //campo opcional
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]),
    // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/) 
  });

  handleSubmit() {

    const userData: User = {

      name: this.registerForm.value.name || "",
      age: this.registerForm.value.age || 0,
      username: this.registerForm.value.username || "",
      email: this.registerForm.value.email || "",
      password: this.registerForm.value.password || "",
      role: "user"

    }

    console.log("datos del usuario :", userData);

    this._userservice.postUser(userData).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          title: "Ok",
          text: res.mensaje,
          icon: "success"
        }).then(() => {
          this._router.navigate(["/login"])
        })
      },
       error : (err:any) => {
        console.error(err.error.mensaje);
        Swal.fire({
          title : "Oops!",
          text: err.error.mensaje,
          icon: "error"
        })
      }
    });

  }
  validation() { }
}
