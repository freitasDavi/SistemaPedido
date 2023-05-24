import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { HomeComponent } from './home/home.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaCidadeComponent } from './lista-cidade/lista-cidade.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "usuario",
    component: CadastroUsuarioComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cidade",
    component: ListaCidadeComponent
  },
  {
    path: "cidade/:indice",
    component: CadastroCidadeComponent
  },
  {
    path: "cidade/novo",
    component: CadastroCidadeComponent
  },
  {
    path: "clientes",
    component: ListaClientesComponent
  },
  {
    path: "clientes/:indice",
    component: ClienteComponent
  },
  {
    path: "clientes/novo",
    component: ClienteComponent
  },
  {
    path: "pedidos",
    component: PedidoComponent
  },
  {
    path: "produtos",
    component: ListarProdutoComponent,
  },
  {
    path: "produtos/:indice",
    component: ProdutoComponent
  },
  {
    path: "produtos/criar",
    component: ProdutoComponent
  },
  {
    path: "vendas",
    component: VendasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
