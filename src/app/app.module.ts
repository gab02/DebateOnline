import { SearchRoutingModule } from './pages/search/search-routing.module';
import { SearchModule } from './pages/search/search.module';
import { ProfileRoutingModule } from './pages/profile/profile-routing.module';
import { ProfileModule } from './pages/profile/profile.module';
import { LoginModule } from './pages/login/login.module';
import { MainModule } from './pages/main/main.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { MainRoutingModule } from './pages/main';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    MainRoutingModule,
    LoginModule,
    LoginRoutingModule,
    ProfileModule,
    ProfileRoutingModule,
    SearchModule,
    SearchRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
