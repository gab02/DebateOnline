import { Candidatos } from './../../../search/models/candidatos';
import { ProfileService } from './../../services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-candidate',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  routeState: any;
  profileToGet;
  name: string;
  candidato: Candidatos;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private service: ProfileService
  ) {
    var routerstat = this.router.getCurrentNavigation();
    if (routerstat){
      this.routeState = routerstat.extras.state;
      if (this.routeState) {
        this.profileToGet = null;
        this.profileToGet = this.routeState.data;
      }
    }
  }

  ngOnInit(): void {
    console.log(this.profileToGet);
    if (this.profileToGet === undefined) {
      this.router.navigate(['search']);
      return;
    }
    this.getFilterByCandidate();
  }
  toggleSelection(chip: String) {
    if (chip === 'L') {
      this.like();
    }
    if (chip === 'U') {
      this.unlike();
    }
  }
  getFilterByCandidate() {
    this.name = this.profileToGet._id;
    this.service.getCandidato(this.name).subscribe((data) => {
      this.candidato = data;
      console.log(this.candidato);
    });
  }
  unlike() {
    this.service.setUnLikeCandidato(this.candidato._id).subscribe((data) => {
      this.service.getCandidato(this.candidato._id).subscribe((data) => {
        this.candidato = data;
      });
    });
  }

  like() {
    this.service.setLikeCandidato(this.candidato._id).subscribe((data) => {
      this.service.getCandidato(this.candidato._id).subscribe((data) => {
        this.candidato = data;
      });
    });
  }
}
