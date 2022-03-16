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

  public user: SocialUser = new SocialUser();
  constructor(private authService: SocialAuthService) {}
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      localStorage['authToken'] = this.user.authToken;
      localStorage['provider'] = this.user.provider;
      console.log(localStorage['authToken']);
      console.log(this.user);
    });
  }
  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public signOut(): void {
    this.authService.signOut();
  }
}
