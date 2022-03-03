import { Candidatos } from './../search/models/candidatos';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector:'preview-candidato',
  templateUrl: './preview-candidato.component.html',
  styleUrls: ['./preview-candidato.component.scss']
})
export class PreviewCandidatoComponent implements OnInit {

  @Input()
  CandidatoAtual: Candidatos[];

  constructor() { }

  ngOnInit(): void {
  }

}
