import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataDisplayComponent } from './data-display/data-display.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ChampionsComponent } from './champions/champions.component';
import { FilterByDriverComponent } from './filter-by-driver/filter-by-driver.component';
import { FilterCountryComponent } from './filter-country/filter-country.component';

const routes: Routes = [
  {path: 'dashboard', component: DataDisplayComponent},
  {path: 'filter-driver/:driver_name', component: FilterByDriverComponent},
  { path: 'filter-country/:country', component: FilterCountryComponent },
  {path: 'champions', component: ChampionsComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }