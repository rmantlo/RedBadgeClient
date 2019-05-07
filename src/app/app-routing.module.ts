import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventpageComponent } from './eventpage/eventpage.component';
import { HomeComponent } from './home/home.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'events', component:EventpageComponent},
  {path: 'profile', component:ProfilepageComponent},
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
