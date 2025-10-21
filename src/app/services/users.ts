import { Injectable , inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _httpClient = inject(HttpClient);

  private apiUrl =  environment.appUrl;
  
  // metodos para hacer las peticiones


  // metodo post
   
  postUser (userToCreate : User) {
    return this._httpClient.post(this.apiUrl + "/users", userToCreate);
  }

  // metodo GET

  getUser(){
    return this._httpClient.get(this.apiUrl + "/users");
  }
  // metodo PUT

  putUser(userToUpdate : User , id : string){

    return this._httpClient.put(this.apiUrl + "/users" + id ,userToUpdate);
    // return this._httpClient.put(`${this.apiUrl}/users/`,userToUpdate,{params:{id , color , age}});
  }

  // metodo Delete
 
  deleteUser ( id : string){
    return this._httpClient.delete(this.apiUrl + "/users/eliminar/" + id );
  }

}
