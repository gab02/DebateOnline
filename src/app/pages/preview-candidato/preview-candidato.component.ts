import { Candidatos } from './../search/models/candidatos';

import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search';
import { MatChip } from '@angular/material/chips';

@Component({
  selector:'preview-candidato',
  templateUrl: './preview-candidato.component.html',
  styleUrls: ['./preview-candidato.component.scss']
})
export class PreviewCandidatoComponent implements OnInit {

  @Input()
  CandidatoAtual: Candidatos;

  constructor(public service: SearchService) { }

  ngOnInit(): void {
  }
  
  toggleSelection(chip: String) {
    if (chip === 'L'){
      this.like()
    } 
    if (chip === 'U'){
      this.unlike()
    }
 }

 unlike(){
  this.service.setUnLikeCandidato(this.CandidatoAtual._id).subscribe((data)=>{
    this.service.carregarCandidato(this.CandidatoAtual._id).subscribe((data) => {
      this.CandidatoAtual = data
    })
  })
  
}


  like(){
    this.service.setLikeCandidato(this.CandidatoAtual._id).subscribe((data)=>{
      this.service.carregarCandidato(this.CandidatoAtual._id).subscribe((data) => {
        this.CandidatoAtual = data
      })
    })
    
  }

}
