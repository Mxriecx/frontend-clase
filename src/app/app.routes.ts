import { Routes } from '@angular/router';
// importar todos nuestros componentes pagina 
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Register } from './pages/register/register';
import { Admin } from './pages/admin/admin';
import { Notfound } from './pages/notfound/notfound';
import { Login } from './pages/login/login';
import { authGuard } from './guard/auth-guard';
import { Users } from './pages/admin/users/users';
import { Inventory } from './pages/admin/inventory/inventory';

export const routes: Routes = [

    { path: '', component: Home, title: 'Inicio' },

    {
        path: 'admin',
         component: Admin,
          title: 'Dashboard', 
          canActivate: [authGuard], 
          canActivateChild: [authGuard], 
          children: [
            { path: 'users', component: Users },
            { path: 'Inventory', component: Inventory } //title es opcional
        ]
    },



    { path: 'products', component: Products, title: 'Productos' },
    { path: 'register', component: Register, title: 'Registrate' },

    { path: 'login', component: Login, title: 'Inicio de sesion' },
    { path: '**', component: Notfound, title: '404' }

];
