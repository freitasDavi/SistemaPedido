import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-estado',
  templateUrl: './lista-estado.component.html',
  styleUrls: ['./lista-estado.component.scss']
})
export class ListaEstadoComponent {
  public estados: string[] = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
  public estadoSelecionado: string = "";

  public emitirEstado = new EventEmitter();
  public emitirSetEstado = new EventEmitter();

  getEstado(): string {
    this.emitirEstado.emit();

    return this.estadoSelecionado;
  }

  setEstado(estadoBanco: string) {
    this.emitirSetEstado.emit();
    this.estadoSelecionado = estadoBanco;
  }

}
