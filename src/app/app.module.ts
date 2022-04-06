import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './pages/search/search-routing.module';
import { SearchModule } from './pages/search/search.module';
import { ProfileRoutingModule } from './pages/profile/profile-routing.module';
import { ProfileModule } from './pages/profile/profile.module';
import { LoginModule } from './pages/login/login.module';
import { MainModule } from './pages/main123123/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { MainRoutingModule } from './pages/main123123';
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/http-header-intercep';
import { UtilModule } from './util';
import { MainComponent } from './principal';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainModule,
    FormsModule,
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
    MatGridListModule,
    NgGoogleAnalyticsModule.forRoot({ id: "G-W1Y65460WZ" }),
    UtilModule
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
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
