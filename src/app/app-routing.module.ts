import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "cidade",
    component: CadastroCidadeComponent
  },
  {
    path: "usuario",
    component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
