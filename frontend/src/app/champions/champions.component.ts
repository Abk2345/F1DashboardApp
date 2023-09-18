import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverService } from '../driver.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions_list:any = [];
  @ViewChild('empTbSort') empTbSort = new MatSort();
  displayedColumns: string[] = ['name', 'country', 'drivers_championship', 'points'];

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    // getting champions data
    this.driverService.getChampionsData().subscribe((data)=>{
      console.log(data);
      this.champions_list = data;
    })
  }

}
