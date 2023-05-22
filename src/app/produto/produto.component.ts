import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Produto {
  nome: string;
  valor: number;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  public nome: string = "";
  public valor: number = 0;

  public indice: number = -1;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: any) => {
        // - 1 significa que é um novo registro
        this.indice = params.indice;
        if (params.indice !== "criar") {
          let produto = this.produtoService.recuperarPorId(this.indice);
          this.nome = produto.nome;
          this.valor = produto.valor;
        }
      });
  }

  public handleSalvar() {
    if (this.nome.trim().length == 0 || this.valor <= 0) {
      return alert("É necessário informar todos os campos");
    }

    const objSalvar: Produto = {
      nome: this.nome,
      valor: this.valor
    };

    if (String(this.indice) === "criar") {
      this.produtoService.insert(objSalvar);
    } else {
      this.produtoService.update(this.indice, objSalvar);
      this.router.navigateByUrl('/produtos');
    }


    this.limparProdutos();
  }

  public getProdutosFromLocalStorage(): Produto[] {
    const produtos = JSON.parse(String(localStorage.getItem('produtos')));

    return produtos ? produtos : [];
  }

  public limparProdutos() {
    this.nome = "";
    this.valor = 0;
  }
}
