import { VersoesService } from './../services/versoes.service';
import { VersoesAtivas } from './../model/versoes-ativas';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-versoes-ativas-detail',
  templateUrl: './versoes-ativas-detail.component.html',
  styleUrls: ['./versoes-ativas-detail.component.css']
})
export class VersoesAtivasDetailComponent implements OnInit {

  @Input() public versaoSelecionada: VersoesAtivas = null;

  constructor(private versoesService: VersoesService) { }

  ngOnInit() {
  }

  public salvarVersao() {
    this.versoesService.salvarVersao(this.versaoSelecionada);
  }

}
