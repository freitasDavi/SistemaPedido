import { Injectable } from '@angular/core';
import { Cidade } from '../cadastro-cidade/cadastro-cidade.component';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  public cidades: Cidade[] = [];

  constructor() { }

  recuperarCidades() {
    const parsedCidades = JSON.parse(String(localStorage.getItem('cidades')));

    this.cidades = parsedCidades ? parsedCidades : [];

    return this.cidades;
  }

  public excluir(indice: number) {
    this.cidades.splice(indice, 1);

    this.salvar();
  }

  public update(index: number, cliente: Cidade) {
    this.cidades[index] = cliente;

    this.salvar();
  }

  public insert(cliente: Cidade) {
    this.cidades.push(cliente);

    this.salvar();
  }

  public salvar() {
    localStorage.setItem('cidades', JSON.stringify(this.cidades));
  }

  public recuperarPorId(index: number) {
    this.cidades = this.recuperarCidades();

    return this.cidades[index];
  }
}
