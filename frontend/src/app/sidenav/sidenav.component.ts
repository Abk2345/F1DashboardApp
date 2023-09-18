// this componet is for showing sidenav which shows list of all the pages this web app contains
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'; // Remove FormsModule and ReactiveFormsModule
import {MatInputModule} from '@angular/material/input';
import { DriverService } from '../driver.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // taking inputs for country and driver names
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @ViewChild('input2') input2!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  myControl2 = new FormControl('');

  // list of country and driver names
  options!: string[];
  options2!: string[];

  // updating filtered options on search using autocomplete
  filteredOptions: string[];
  filteredOptions2: string[];

  constructor(private driverService: DriverService, private router: Router, private location:Location) {
    this.filteredOptions = this.options;
    this.filteredOptions2 = this.options2;
  }

  ngOnInit(): void {
    this.driverService.getCountriesList().subscribe((data: CountryData)=>{
      console.log(data);
      this.options = data["country_list"];
    });

    this.driverService.getDrivernamesList().subscribe((data: DrivernamesData)=>{
      console.log(data);
      this.options2 = data["drivers_name_list"];
    })
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.toLowerCase().includes(filterValue));
    console.log(this.myControl.value);
  }

  filter2(): void {
    const filterValue = this.input2.nativeElement.value.toLowerCase();
    this.filteredOptions2 = this.options2.filter(o => o.toLowerCase().includes(filterValue));
    console.log(this.filteredOptions2);
  }

  // on click of search by country to load all the data very properly
  refreshPage1(): void {
    // Get the current URL
    const newUrl = `/filter-country/${this.myControl.value}`; 
    console.log(newUrl);
    // Navigate to the new URL using Angular's Router
    this.router.navigateByUrl(newUrl).then(() => {
    // Once the navigation is complete, trigger a page reload
    this.location.replaceState(this.router.url);
    window.location.reload();
  });
  }

// on click of search by driver name to load all the data very properly
  refreshPage2(): void {
    // Get the current URL
    const newUrl = `/filter-driver/${this.myControl2.value}`; // Modify this URL accordingly
    console.log(newUrl);
  // Navigate to the new URL using Angular's Router
    this.router.navigateByUrl(newUrl).then(() => {
    // Once the navigation is complete, trigger a page reload
    this.location.replaceState(this.router.url);
    window.location.reload();
  });
  }
  

}

// interface for country list data
interface CountryData {
  country_list: string[];
}

// interface for driver_name_list data
interface DrivernamesData {
  drivers_name_list: string[];
}
