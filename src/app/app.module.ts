import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { MatIconModule, MatSidenavModule, MatButtonModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './main-nav/signup/signup.component';
import { LoginComponent } from './main-nav/login/login.component';
import { HomeComponent } from './home/home.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CarouselComponent} from './carousel/carousel.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DeleteAlertComponent } from './profilepage/delete-alert/delete-alert.component';
import { CalendarComponent } from './profilepage/calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    EventpageComponent,
    ProfilepageComponent,
    PagenotfoundComponent,
    CarouselComponent,
    MainNavComponent,
    DeleteAlertComponent,
    CalendarComponent,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter(){
          return localStorage.getItem('token')
        },
        whitelistedDomains: ['http://localhost:3000', 'http://localhost:3000/events','http://localhost:3000/profile'],
        blacklistedRoutes: ['http://localhost:3000/home']
      }
    }),
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot(),
    // MatJumbotronModule.forRoot()
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot(),
    FullCalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
