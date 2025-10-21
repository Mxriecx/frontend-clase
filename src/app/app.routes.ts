import { Routes } from '@angular/router';
// importar todos nuestros componentes pagina 

import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';
import { Admin } from './pages/admin/admin';
import { Notfound } from './pages/notfound/notfound';
import { Login } from './pages/login/login';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [

    {path:'',component: Home, title :'Inicio'},
    {path:'products',component: Products, title :'Productos'},
    {path:'register',component: Register, title :'Registrate'},
    {path:'admin',component: Admin, title :'Dashboard', canActivate:[authGuard]},
    {path:'login',component: Login, title :'Inicio de sesion'},
    {path:'**',component: Notfound, title :'404'}
    
];
