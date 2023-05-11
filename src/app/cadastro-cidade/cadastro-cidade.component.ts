import { Component, OnInit, ViewChild } from '@angular/core';
import { CidadeService } from '../service/cidade.service';
import { ActivatedRoute } from '@angular/router';

export interface Cidade {
  nome: string;
  estado: string;
};

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.scss']
})
export class CadastroCidadeComponent implements OnInit {
  public nome: string = "";
  public estado: string = "";
  public indice: number = -1;

  @ViewChild('lista_component') listaEstado: any;

  constructor(
    private cidadeService: CidadeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.indice = params.indice;
        if (params.indice !== "novo") {
          let cliente = this.cidadeService.recuperarPorId(this.indice);
          this.nome = cliente.nome;
          this.estado = cliente.estado;
        }
      })
  }

  public handleSalvar() {
    if (this.nome.trim().length == 0 || this.estado.trim().length == 0) {
      return alert("É necessário informar todos os campos");
    }

    let objSalvar: Cidade = {
      estado: this.estado,
      nome: this.nome,
    };

    if (String(this.indice) === "novo") {
      this.cidadeService.insert(objSalvar);
    } else {
      this.cidadeService.update(this.indice, objSalvar);
    }

    this.limparCidade();
  }

  public limparCidade() {
    this.nome = "";
    this.estado = "";
  }
}
