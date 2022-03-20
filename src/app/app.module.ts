import { SearchRoutingModule } from './pages/search/search-routing.module';
import { SearchModule } from './pages/search/search.module';
import { ProfileRoutingModule } from './pages/profile/profile-routing.module';
import { ProfileModule } from './pages/profile/profile.module';
import { LoginModule } from './pages/login/login.module';
import { MainModule } from './pages/main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { MainRoutingModule } from './pages/main';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreviewCandidatoComponent } from './pages/preview-candidato/preview-candidato.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgGoogleAnalyticsModule } from "ng-google-analytics";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    MainRoutingModule,
    LoginModule,
    LoginRoutingModule,
    ProfileModule,
    ProfileRoutingModule,
    SearchModule,
    MatToolbarModule,
    MatCardModule,
    SearchRoutingModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgGoogleAnalyticsModule.forRoot({ id: "G-W1Y65460WZ" }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '412391433333-51s0uq3ots9t232r1jmo1c72l7e1782f.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
