import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent {
  faSearch = faSearch;
  public id_produto = "";
  public nome_produto = "";

  constructor(
    private produtoService: ProdutoService,

  ) { }

  public carregarProduto() {
    let produto = this.produtoService.recuperarPorId(Number(this.id_produto));
    if (produto) {
      this.nome_produto = produto.nome;
    } else {
      this.nome_produto = "";
    }
  }
}
