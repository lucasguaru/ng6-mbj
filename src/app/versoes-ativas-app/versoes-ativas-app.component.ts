import { VersoesService } from './../services/versoes.service';
import { Component, OnInit } from '@angular/core';
import { VersoesAtivas } from '../model/versoes-ativas';

@Component({
  selector: 'app-versoes-ativas-app',
  templateUrl: './versoes-ativas-app.component.html',
  styleUrls: ['./versoes-ativas-app.component.css']
})
export class VersoesAtivasAppComponent implements OnInit {

  listaVersoesAtivas: VersoesAtivas[];
  versaoSelecionada: VersoesAtivas;

  constructor(private versoesService: VersoesService) { }

  ngOnInit() {
    this.listaVersoesAtivas = this.versoesService.getVersoesAtivas();
    this.versoesService.atualizouValor.addListener('listaVersoesAtivas', event => console.log(event));
  }

  public selecionouVersao(versao) {
    this.versaoSelecionada = versao;
  }

}
