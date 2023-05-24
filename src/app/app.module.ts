import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { FormsModule } from '@angular/forms';
import { ListaEstadoComponent } from './lista-estado/lista-estado.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RouteModule } from './route.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ListarProdutoComponent } from './listar-produto/listar-produto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaCidadeComponent } from './lista-cidade/lista-cidade.component';
import { ComboCidadeComponent } from './combo-cidade/combo-cidade.component';
import { VendasComponent } from './vendas/vendas.component';
import { SearchfieldComponent } from './produto/searchfield/searchfield.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroCidadeComponent,
    ListaEstadoComponent,
    LayoutComponent,
    MenuComponent,
    HomeComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    ClienteComponent,
    ProdutoComponent,
    PedidoComponent,
    ListarProdutoComponent,
    ListaClientesComponent,
    ListaCidadeComponent,
    ComboCidadeComponent,
    VendasComponent,
    SearchfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouteModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
