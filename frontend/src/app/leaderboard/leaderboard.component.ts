// showing all entries who have earned at least 1 points in f1

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DriverService } from '../driver.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  leaderboards_data:any = []
  displayedColumns: string[] = ['name', 'country', 'seasons_competed', 'drivers_championship', 'points'];
  constructor(private driversService: DriverService) { }
  
// getting data
  ngOnInit(): void {
    this.driversService.getLeaderboardsData().subscribe((data)=>{
      console.log(data);
      this.leaderboards_data = data;
    })
  }

}
