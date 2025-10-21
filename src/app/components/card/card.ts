import { Component, inject , OnInit } from '@angular/core';
import { ProductService } from '../../services/products';
import { Product } from '../../interfaces/product';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit{

_productService = inject(ProductService);

// variable 

allProducts : Product[] = []; // almacena todos los productos de la base de datos
baseUrl: string = environment.appUrl;
showProducts(){
  //1. voy a hacer la peticion get
  //2. voy a guardar los productos en mi variable ll products
  //3 voy a mostrarlos en mi navegador

  this._productService.getProducts().subscribe({
    next:(response : any)=>{
      this.allProducts =response.data;
      console.log(this.allProducts)
    }, 
    
    //respuestas positivas del back

    error:(error : any)=>{
      console.error(error);
    } //respuestas negativas del back (errores)
  })
}

ngOnInit(): void {
  this.showProducts()
}

}
