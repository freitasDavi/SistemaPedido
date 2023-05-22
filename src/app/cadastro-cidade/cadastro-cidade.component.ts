import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CidadeService } from '../service/cidade.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Cidade {
  nome: string;
  estado: string;
};

@Component({
  selector: 'app-cadastro-cidade',
  templateUrl: './cadastro-cidade.component.html',
  styleUrls: ['./cadastro-cidade.component.scss']
})
export class CadastroCidadeComponent implements OnInit, AfterViewInit {
  public nome: string = "";
  public estado: string = "";
  public indice: number = -1;

  @ViewChild('lista_component') listaEstado: any;

  constructor(
    private cidadeService: CidadeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.indice = params.indice;
        if (params.indice !== "novo") {
          let cidade = this.cidadeService.recuperarPorId(this.indice);
          this.nome = cidade.nome;
          this.estado = cidade.estado;
        }
      })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.listaEstado.setEstado(this.estado);
    }, 500)
  }

  public handleSalvar() {
    if (this.nome.trim().length == 0) {
      return alert("É necessário informar todos os campos");
    }

    let objSalvar: Cidade = {
      estado: this.listaEstado.getEstado(),
      nome: this.nome,
    };

    if (String(this.indice) === "novo") {
      this.cidadeService.insert(objSalvar);
    } else {
      this.cidadeService.update(this.indice, objSalvar);
    }

    this.limparCidade();

    this.router.navigateByUrl('/cidade');
  }

  public limparCidade() {
    this.nome = "";
    // this.estado = "";
  }
}
