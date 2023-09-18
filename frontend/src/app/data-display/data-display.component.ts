// data-display.component.ts -> this component is for the dashboard (homepage)
import { Component, OnInit } from '@angular/core';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  drivers:any = [];
  highlights:any = {};
  datapoints_max_competed:any = [];
  datapoints_max_champions:any = [];

  constructor(private driverService: DriverService) {}


  ngOnInit(): void {

    // data extraction, total drivers participation, total countries, highest points winner and highest championship holder
    this.driverService.getAllDrivers().subscribe((data) => {
      console.log(data);
      this.drivers = data;
    });

    this.driverService.getHightlightsData().subscribe((data) => {
      console.log(data);
      this.highlights = data;
    })

    // Twice called to load the data properly
    this.getDataPoints();
    this.getDataPoints();

  }

  getDataPoints(): void{
    // getting charts data, drivers participation and driver's championship
    this.driverService.getDashboardChartsData().subscribe((data: DashboardChartsData)=>{
      console.log(data);
      var sum_competed = 0;
      var sum_num_championships = 0;
      this.datapoints_max_champions = [];
      this.datapoints_max_competed = [];

      for(let i=0; i<data.max_competed.length; i++)
      {
        sum_competed += data.max_competed[i].num_seasons_competed;
        sum_num_championships += data.max_championships[i].drivers_championship;

      }

      for(let i=0; i<data.max_competed.length; i++)
      {
        var data_ = data.max_competed[i];
        var name = data_['name'];
        name += " | ";
        name += data_['country'];
        name += " | ";
        name += data_['num_seasons_competed'];
        
        var obj:dataPoints = {name: '', y: null};
        obj["name"] = name;
        obj["y"] = (data_['num_seasons_competed']/sum_competed)*100;

        this.datapoints_max_competed.push(obj);
      }

      console.log(this.datapoints_max_competed)

      for(let i=0; i<data.max_championships.length; i++)
      {
        var data_ = data.max_championships[i];
        var name = data_['name'];
        name += " | ";
        name += data_['country'];
        name += " | ";
        name += data_['drivers_championship'];
        
        var obj:dataPoints = {name: '', y: null};
        obj["name"] = name;
        obj["y"] = (data_['drivers_championship']/sum_num_championships)*100;

        this.datapoints_max_champions.push(obj);
      }


      this.chartOptions = {
        animationEnabled: true,
        title: {
        text: "Drivers Participation"
        },
        data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: this.datapoints_max_competed,
        }]
      };
    
    // number of time drivers have become champions, x = name of driver | Country
      this.chartOptions2 = {
        animationEnabled: true,
        title: {
        text: "Drivers Championship"
        },
        data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: this.datapoints_max_champions,
        }]
      }

    })

  }

  chartOptions: any;
  chartOptions2: any;




// number of time drivers have participated
// that would be objects, y = number of times, x = name of driver | country



}

interface DashboardChartsData {
  max_competed: any;
  max_championships: any;
  // Define other properties here
}

interface dataPoints{
  name: string;
  y: any;
}
