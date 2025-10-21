// los guards - proteger contenido del front
// can activate - protector de rutas - tru o false
//true - si se puede mostrar ese contenido
// false - que no se puede mostrar ese contenido


import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login';
import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const _loginService = inject(LoginService);
  const _router = inject(Router);

  // validacion 1: inicio sesion?
  if (!_loginService.isLoggedIn()) {
    //redireccione a inicio de sesion
    alert("no has iniciado sesion");
    _router.navigate(['/login']);
    return false;
  }

  // validacion 2: es admin?

  if (!_loginService.isAdmin()) {
    alert("no tienes permitido no eres admin");
    _router.navigate(['/']);
    return false;
  }

  return true;
};
