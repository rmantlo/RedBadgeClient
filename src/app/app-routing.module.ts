import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EventsComponent } from './eventpage/events/events.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { ContactComponent } from './home/contact/contact.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'contact', component: ContactComponent},
  { path: 'events', component: EventpageComponent, canActivate: [AuthGuardService] },
  { path: 'allevents', component: EventsComponent, canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfilepageComponent, canActivate: [AuthGuardService] },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
