import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './navbar/signup/signup.component';
import { LoginComponent } from './navbar/login/login.component';
import { HomeComponent } from './home/home.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    EventpageComponent,
    ProfilepageComponent,
    PagenotfoundComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter(){
          return localStorage.getItem('token')
        },
        whitelistedDomains: ['http://localhost:3000', 'http://localhost:3000/events','http://localhost:3000/profile'],
        blacklistedRoutes: ['http://localhost:3000/home']
      }
    }),
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
    // MatJumbotronModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
