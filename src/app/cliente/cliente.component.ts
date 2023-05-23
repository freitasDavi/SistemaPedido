import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../cadastro-cidade/cadastro-cidade.component';

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
export class ClienteComponent implements OnInit, AfterViewInit {
  public nome: string = '';
  public cpf: string = '';
  public cidade: string = '';

  @ViewChild('combo_cidade') comboCidade: any;

  public indice: number = -1;

  constructor(
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.comboCidade.setCidade(this.cidade);
    })
  }

  public handleSalvar() {
    let cidade = this.comboCidade.getCidade();

    let objSalvar: Cliente = {
      cidade: cidade,
      cpf: this.cpf,
      nome: this.nome
    }

    console.log(objSalvar);

    if (String(this.indice) === "novo") {
      this.clienteService.insert(objSalvar);
    } else {
      this.clienteService.update(this.indice, objSalvar);
    }

    this.limparClientes();

    alert("sucessagem")

    this.router.navigateByUrl("/clientes");
  }

  public limparClientes() {
    this.nome = "";
    this.cpf = "";
  }
}
