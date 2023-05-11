import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../cliente/cliente.component';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;

  constructor(
    public clientesService: ClienteService,
    public router: Router) { }

  ngOnInit(): void {
    this.clientesService.recuperarClientes();
  }

  public handleEditar(index: number) {
    this.router.navigateByUrl(`clientes/${index}`);
  }

  public handleExcluir(index: number) {
    this.clientesService.excluir(index);
  }

}
