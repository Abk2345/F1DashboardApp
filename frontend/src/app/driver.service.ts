// driver.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// for dashboard data
interface DashboardChartsData {
  max_competed: any;
  max_championships: any;
}

// for country data
interface CountryData {
  country_list: string[];
}

// for driver names data
interface DrivernamesData {
  drivers_name_list: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  constructor(private http: HttpClient) {}

  // all drivers
  getAllDrivers() {
    return this.http.get('http://localhost:3000/api/drivers');
  }

  // all highlights data
  getHightlightsData(){
    return this.http.get('http://localhost:3000/api/highlights-data');
  }

  // charts data for dashboard
  getDashboardChartsData(): Observable<DashboardChartsData>{
    return this.http.get<DashboardChartsData>('http://localhost:3000/api/getDashboardChartsData');
  }

  // leaderboard data
  getLeaderboardsData(){
    return this.http.get('http://localhost:3000/api/leaderboard-data');
  }

  // all champions data
  getChampionsData(){
    return this.http.get('http://localhost:3000/api/champions-data');
  }

  // list of all country names
  getCountriesList(): Observable<CountryData>{
    return this.http.get<CountryData>('http://localhost:3000/api/country-names');
  }

  // list of all driver names
  getDrivernamesList(): Observable<DrivernamesData>{
    return this.http.get<DrivernamesData>('http://localhost:3000/api/driver-names');
  }

  // getting data relevant to driver_name
  getDriverWithName(driver_name: string){
    const encodedDriverName = encodeURIComponent(driver_name);
    console.log(driver_name);
    return this.http.get(`http://localhost:3000/api/driver-data/${encodedDriverName}`);
  }

  //getting data related to country_name
  getDataWithCountryName(country_name:string){
    const encodedDriverName = encodeURIComponent(country_name);
    console.log(country_name);
    return this.http.get(`http://localhost:3000/api/drivers-country-data/${encodedDriverName}`);
  }
}
