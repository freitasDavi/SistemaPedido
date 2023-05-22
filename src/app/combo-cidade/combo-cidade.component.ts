import { Component, EventEmitter, OnInit } from '@angular/core';
import { CidadeService } from '../service/cidade.service';
import { Cidade } from '../cadastro-cidade/cadastro-cidade.component';

@Component({
  selector: 'app-combo-cidade',
  templateUrl: './combo-cidade.component.html',
  styleUrls: ['./combo-cidade.component.scss']
})
export class ComboCidadeComponent implements OnInit {
  public cidades: Cidade[] = [];
  public cidadeSelecionada: Cidade = {} as Cidade;

  public emitGetCidade = new EventEmitter();
  public emitSetCidade = new EventEmitter();

  public constructor(
    public cidadeService: CidadeService
  ) {

  }
  ngOnInit(): void {
    this.cidades = this.cidadeService.recuperarCidades();
  }

  public getCidade() {
    this.emitGetCidade.emit();

    return this.cidadeSelecionada;
  }

  public setCidade(cidade: Cidade) {
    this.emitSetCidade.emit();
    this.cidadeSelecionada = cidade;
  }
}
