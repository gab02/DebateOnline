import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Candidatos } from 'src/app/pages/search/models/candidatos';


@Component({
  selector: 'candidatosearch',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {
  @Input() candidatos? : Candidatos[];
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    console.log('passou')
  }
  getProfile(item: Candidatos) {
    this.router.navigate(['profile'], {
      state: { data: item },
    });
  }

  gotosearch() {
    this.router.navigate(['search'], {
      state: {},
    });
  }

}
