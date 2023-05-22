import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CidadeService } from '../service/cidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cidade',
  templateUrl: './lista-cidade.component.html',
  styleUrls: ['./lista-cidade.component.scss']
})
export class ListaCidadeComponent implements OnInit {
  faPen = faPen;
  faTrash = faTrash;

  constructor(
    public cidadeService: CidadeService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.cidadeService.recuperarCidades();
  }

  public handleEditar(index: number) {
    this.router.navigateByUrl(`cidade/${index}`);
  }

  public handleExcluir(index: number) {
    this.cidadeService.excluir(index);
  }

}
