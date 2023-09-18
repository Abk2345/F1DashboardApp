import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from '../driver.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-filter-country',
  templateUrl: './filter-country.component.html',
  styleUrls: ['./filter-country.component.css']
})
export class FilterCountryComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Race Entries', 'Race Starts', 'Race wins', 'Championship' , 'Podium Fastest Laps', 'Points'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  country_name!: string;
  corresponding_driver_data: any;
  race_wins_driver: datapointsi[] = []; 
  race_championship_driver: datapointsi[] = [];
  error_message!:string;
  have_error!:boolean;
  does_not_have_error!:boolean;

  constructor(private driverService: DriverService, private route: ActivatedRoute) {
    this.country_name = '';
    this.have_error = false;
    this.does_not_have_error = true;
    this.error_message = '';
  }
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void { 

    this.route.params.subscribe((params) => {
      const country = params['country'];
      this.country_name = params['country'];
      // Now 'country' contains the value passed in the URL
      console.log('Selected country:', country);

      
    });

   
    this.getRelevantData();
    this.getRelevantData();
  }


  getRelevantData(){
    this.driverService.getDataWithCountryName(this.country_name).subscribe((data)=>{
      this.dataSource = new MatTableDataSource<PeriodicElement>([]);
      console.log(data);
      this.corresponding_driver_data = data;
      this.dataSource.data = this.corresponding_driver_data;
      this.dataSource.paginator = this.paginator;

      if (data === null || data === undefined || this.corresponding_driver_data.length === 0) {
        console.log("Data is null or undefined");
        this.have_error = true;
        this.does_not_have_error = false;
        this.error_message = "Country name not available in the database!";
  
        // Handle the case where data is null or undefined
      } 

      // perform calculations on data -> 1st total race_wins, total championships
      let total_race_wins = 0;
      let total_race_championships = 0;
      for(let i=0; i<this.corresponding_driver_data.length; i++)
      {
        const data_ = this.corresponding_driver_data[i];
        total_race_wins += data_['race_wins'];
        total_race_championships += data_['drivers_championship'];
      }

      this.race_wins_driver = [];
      this.race_championship_driver = [];

      for(let i=0; i<this.corresponding_driver_data.length; i++)
      {
        const data_ = this.corresponding_driver_data[i];
        let obj_race_win:datapointsi = {name: '', y: 0};
        obj_race_win['name'] = data_['name'];
        obj_race_win['y'] = (data_['race_wins']/total_race_wins)*100;

        this.race_wins_driver.push(obj_race_win);

        let obj_championship:datapointsi = {name: '', y: null};
        obj_championship['name'] = data_['name'];
        obj_championship['y'] = (data_['drivers_championship']/total_race_championships)*100;
       

        this.race_championship_driver.push(obj_championship);


      }

      console.log(this.race_championship_driver);
      console.log(this.race_wins_driver); 

      this.chartOptions = {
        animationEnabled: true,
        title: {
        text: "Race wins / Driver"
        },
        data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: this.race_wins_driver,
        }]
      };
    
      this.chartOptions2 = {
        animationEnabled: true,
        title: {
        text: "Championships / Driver"
        },
        data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: this.race_championship_driver,
        }]
      }

    });


  }


  chartOptions: any;
  chartOptions2: any;
  
}

export interface PeriodicElement {
  name: string;
  country: number;
  seasons_competed: string;
  drivers_championship: number;
  race_entries: number;
  race_wins: number;
  race_starts: number;
  pole_positions: number;
  podium_fastest_laps: number;
  points: number;
}

export interface datapointsi{
  name: string;
  y: any;
}





