import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';// para poder usar el post el get el put y el delete
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  //inyeccion de dependencias y/o directivas de Angular

  private _httpClient = inject(HttpClient);

  // Definir la ruta de acceso al backend

  private apiUrl =  environment.appUrl;


  // metodos para hacer las peticiones :

  // 1. peticion post

  postProduct(productToCreate : Product){

    return this._httpClient.post(this.apiUrl + '/products/crear',productToCreate)

  }


  // peticion get
  getProducts (){
    return this._httpClient.get(this.apiUrl + '/products/mostrar');
  }

  //peticion put
  putProducts (productToUpdate : Product, id : string){
    return this._httpClient.put(this.apiUrl + '/products/actualizar/' + id , productToUpdate )
  }


  //peticion delete
  deleteProducts (id : string){
    return this._httpClient.delete(this.apiUrl + '/products/eliminar/' + id)
  }


}
