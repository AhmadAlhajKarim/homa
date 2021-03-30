import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { YearOverviewComponent } from './components/year-overview/year-overview.component';
4;
const routes: Routes = [
  //client components
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'overview/:year', component: YearOverviewComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-me', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
