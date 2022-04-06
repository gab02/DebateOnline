import { Candidatos } from 'src/app/pages/search/models/candidatos';
import { SearchService } from 'src/app/pages/search';
import { Component } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'debateOnline';
  findebar: string = '';
  length: number;

  currentPage: number = 0;
  pageSize = 10;
  candidatos: Candidatos[] = [];
  candidato: Candidatos;
  public user: SocialUser = new SocialUser();
  constructor(
    private authService: SocialAuthService,
    public service: SearchService
  ) {}
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      if (this.user != null) {
        localStorage['authToken'] = this.user.authToken;
        localStorage['provider'] = this.user.provider;
        localStorage['idtoken'] = this.user.idToken;
        console.log(localStorage['authToken']);
        console.log(this.user);
      }
    });
  }
  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public signOut(): void {
    this.authService.signOut();
  }
  populate() {
    this.service
      .carregarRegistroSelect(this.findebar, this.currentPage, this.pageSize)
      .subscribe((data) => {
        this.candidatos = data.candidatos;
        this.length = data.totalPages;
        console.log(data);
      });
  }
}
