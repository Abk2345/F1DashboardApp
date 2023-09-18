// listing all the required modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatListModule } from '@angular/material/list';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ChampionsComponent } from './champions/champions.component';
import { FilterCountryComponent } from './filter-country/filter-country.component';
import { FilterByDriverComponent } from './filter-by-driver/filter-by-driver.component';
import {MatCardModule} from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    SidenavComponent,
    LeaderboardComponent,
    ChampionsComponent,
    FilterCountryComponent,
    FilterByDriverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSortModule,
    MatAutocompleteModule,
    CanvasJSAngularChartsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Module '"./app-routing.module"' declares 'routes' locally, but it is not exported.