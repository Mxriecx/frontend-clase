import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private _userservice = inject(UserService);
  private _router =inject(Router);

  registerForm = new FormGroup({
    name: new FormControl(""),
    username: new FormControl(""),
    email: new FormControl(""),
    age: new FormControl<number | null>(null),
    password: new FormControl<string>(""),
    
  });

  handleSubmit(){

    const userData : User = {

      name : this.registerForm.value.name ||"",
      age : this.registerForm.value.age || 0,
      username : this.registerForm.value.username||"",
      email : this.registerForm.value.email ||"",
      password : this.registerForm.value.password ||"",
      role : "user"
        
    }

    console.log("datos del usuario :" , userData);

    this._userservice.postUser(userData).subscribe({
      next : (res : any )=>{
        console.log(res);
      },
      error : (err:any) =>{
        console.error(err.error.mensaje)
      }
    });
  }

}
