// driver.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



interface DashboardChartsData {
  max_competed: any;
  max_championships: any;
  // Define other properties here
}

interface CountryData {
  country_list: string[];
  // Define other properties here
}

interface DrivernamesData {
  drivers_name_list: string[];
  // Define other properties here
}

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  constructor(private http: HttpClient) {}

  getAllDrivers() {
    return this.http.get('http://localhost:3000/api/drivers');
  }

  getHightlightsData(){
    return this.http.get('http://localhost:3000/api/highlights-data');
  }

  getDashboardChartsData(): Observable<DashboardChartsData>{
    return this.http.get<DashboardChartsData>('http://localhost:3000/api/getDashboardChartsData');
  }

  getLeaderboardsData(){
    return this.http.get('http://localhost:3000/api/leaderboard-data');
  }

  getChampionsData(){
    return this.http.get('http://localhost:3000/api/champions-data');
  }

  getCountriesList(): Observable<CountryData>{
    return this.http.get<CountryData>('http://localhost:3000/api/country-names');
  }

  getDrivernamesList(): Observable<DrivernamesData>{
    return this.http.get<DrivernamesData>('http://localhost:3000/api/driver-names');
  }

  getDriverWithName(driver_name: string){
    const encodedDriverName = encodeURIComponent(driver_name);
    console.log(driver_name);
    return this.http.get(`http://localhost:3000/api/driver-data/${encodedDriverName}`);
  }

  getDataWithCountryName(country_name:string){
    const encodedDriverName = encodeURIComponent(country_name);
    console.log(country_name);
    return this.http.get(`http://localhost:3000/api/drivers-country-data/${encodedDriverName}`);
  }
}
