import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuardGuard], children: [] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
