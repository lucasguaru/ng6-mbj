import { VersoesAtivas } from './../model/versoes-ativas';
import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class VersoesService {

  public listaVersoesAtivas: VersoesAtivas[] = [
    new VersoesAtivas(1004, 'Versão 1.8.8', '28/05/2018', 'Ativo'),
    new VersoesAtivas(1003, 'Versão 1.8.6', '22/04/2018', 'Ativo'),
    new VersoesAtivas(1002, 'Versão 1.8.4', '18/03/2018', 'Ativo'),
    new VersoesAtivas(1001, 'Versão 1.8.2', '13/02/2018', 'Inativo')];

  public atualizouValor = new EventEmitter();

  constructor() { }

  public getVersoesAtivas() {
    return this.listaVersoesAtivas;
  }

  public salvarVersao(versaoAlterada: VersoesAtivas) {
    for (let index in this.listaVersoesAtivas) {
      if (this.listaVersoesAtivas[index].id === versaoAlterada.id) {
        this.listaVersoesAtivas[index] = versaoAlterada;
        break;
      }      
    }
    this.atualizouValor.emit('listaVersoesAtivas', this.listaVersoesAtivas);
  }
}
