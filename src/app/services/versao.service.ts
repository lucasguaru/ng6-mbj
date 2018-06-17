import { Versao } from './../model/versao';
import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class VersaoService {

  public atualizouValor = new EventEmitter();

  constructor() { }

  public getVersoesAtivas() {
  }

  public salvarVersao(versaoAlterada: Versao) {
    
  }
}
