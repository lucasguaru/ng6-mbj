import { Versao } from './../model/versao';
import { VersaoService } from './../services/versao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versoes-ativas-app',
  templateUrl: './versoes-ativas-app.component.html',
  styleUrls: ['./versoes-ativas-app.component.css']
})
export class VersoesAtivasAppComponent implements OnInit {

  listaVersoesAtivas: Versao[];
  versaoSelecionada: Versao;

  constructor(private versoesService: VersaoService) { }

  ngOnInit() {
  }

  public selecionouVersao(versao) {
    this.versaoSelecionada = versao;
  }

}
