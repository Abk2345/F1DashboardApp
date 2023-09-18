import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-filter-by-driver',
  templateUrl: './filter-by-driver.component.html',
  styleUrls: ['./filter-by-driver.component.css']
})
export class FilterByDriverComponent implements OnInit {
  driver_name!: string;
  corresponding_driver_data: any;
  time_participated:number = 0;
  error_message:string = '';
  have_error!:boolean;
  does_not_have_error!:boolean;
  constructor(private driverService: DriverService, private route: ActivatedRoute) {
    this.driver_name = '';
	this.have_error = false;
	this.does_not_have_error = true;
	this.error_message = 'Some error while making request';
  }

  ngOnInit(): void { 

    this.route.params.subscribe((params) => {
      this.driver_name = params['driver_name'];
      // Now 'country' contains the value passed in the URL
      console.log("Selected driver", this.driver_name);

      this.driverService.getDriverWithName(this.driver_name).subscribe((data)=>{
        console.log(data);
        this.corresponding_driver_data = data;

		if (data === null || data === undefined || this.corresponding_driver_data.length === 0) {
			console.log("Data is null or undefined");
			this.have_error = true;
			this.does_not_have_error = false;
			this.error_message = "Driver name not available in the database!";

			// Handle the case where data is null or undefined
		} 

		let parti_arr = this.corresponding_driver_data[0].seasons_competed;
		parti_arr = parti_arr.split(',');
		this.time_participated = parti_arr.length;
      })

      // You can use the 'country' value in your component logic
    });

  }

  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Sales by Department"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Toys" },
		  { y: 28.2, name: "Electronics" },
		  { y: 14.4, name: "Groceries" },
		  { y: 43.3, name: "Furniture" }
		]
	  }]
	};

  chartOptions2 = {
	  animationEnabled: true,
	  title: {
		text: "Sales by Department"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 14.1, name: "Toys" },
		  { y: 28.2, name: "Electronics" },
		  { y: 14.4, name: "Groceries" },
		  { y: 43.3, name: "Furniture" }
		]
	  }]
	}

}
