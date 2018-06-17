import { VersaoService } from './../services/versao.service';
import { Component, OnInit, Input } from '@angular/core';
import { Versao } from '../model/versao';

@Component({
  selector: 'app-versoes-ativas-detail',
  templateUrl: './versoes-ativas-detail.component.html',
  styleUrls: ['./versoes-ativas-detail.component.css']
})
export class VersoesAtivasDetailComponent implements OnInit {

  @Input() public versaoSelecionada: Versao = null;

  constructor(private versoesService: VersaoService) { }

  ngOnInit() {
  }

  public salvarVersao() {
    this.versoesService.salvarVersao(this.versaoSelecionada);
  }

}
