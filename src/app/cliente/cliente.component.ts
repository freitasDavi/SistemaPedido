import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { ActivatedRoute } from '@angular/router';

export interface Cliente {
  nome: string;
  cpf: string;
  cidade: string;
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  public nome: string = '';
  public cpf: string = '';
  public cidade: string = '';

  public indice: number = -1;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.indice = params.indice;
        if (params.indice !== "novo") {
          let cliente = this.clienteService.recuperarPorId(this.indice);
          this.nome = cliente.nome;
          this.cpf = cliente.cpf;
          this.cidade = cliente.cidade;
        }
      })
  }

  public handleSalvar() {
    let objSalvar: Cliente = {
      cidade: this.cidade,
      cpf: this.cpf,
      nome: this.nome
    }

    if (String(this.indice) === "novo") {
      this.clienteService.insert(objSalvar);
    } else {
      this.clienteService.update(this.indice, objSalvar);
    }

    this.limparClientes();

    alert("sucessagem")
  }

  public salvarClientesNoLocalStorage(clientes: Cliente[]): void {
    localStorage.setItem('clientes', JSON.stringify(clientes));

    this.limparClientes();
  }

  public limparClientes() {
    this.nome = "";
    this.cpf = "";
    this.cidade = "";
  }

  public getClientesFromLocalStorage(): Cliente[] {
    const clientes = JSON.parse(String(localStorage.getItem('clientes')));

    return clientes;
  }
}
