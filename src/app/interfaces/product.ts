// definir la estructura de datos :
export interface Product {
    _id: string;
    image : string; // URL de la imagen del producto
    title : string;
    description? : string;
    price : number;
    categories? : string;
    isAvailable? : boolean;
   
}
