import { LoginComponent } from './login/login.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'produtos', component: ListaProdutoComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'', component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
