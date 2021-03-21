import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YearOverviewComponent } from './year-overview/year-overview.component';

const routes: Routes = [
  //client components
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'overview/:year', component: YearOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
