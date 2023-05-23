import { Injectable } from '@angular/core';
import { Cliente } from '../cliente/cliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public clientes: Cliente[] = [];

  constructor() { }

  recuperarClientes() {
    const parsedClientes = JSON.parse(String(localStorage.getItem('clientes')));

    this.clientes = parsedClientes ? parsedClientes : [];

    return this.clientes;
  }

  public excluir(indice: number) {
    this.clientes.splice(indice, 1);

    this.salvar();
  }

  public update(index: number, cliente: Cliente) {
    this.clientes[index] = cliente;

    console.log(cliente);

    this.salvar();
  }

  public insert(cliente: Cliente) {
    this.clientes.push(cliente);

    this.salvar();
  }

  public salvar() {
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  public recuperarPorId(index: number) {
    this.clientes = this.recuperarClientes();

    return this.clientes[index];
  }
}
