import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.component';
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss']
})
export class ListarProdutoComponent implements OnInit {
  faTrash = faTrash;
  faPen = faPen;

  constructor(
    public produtoService: ProdutoService,
    public router: Router) { }

  ngOnInit(): void {
    this.produtoService.getProdutosFromLocalStorage();
  }

  public editar(index: number) {
    this.router.navigateByUrl(`produtos/${index}`);
  }
}
