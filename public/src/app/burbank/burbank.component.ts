import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  title = "Burbank, CA";
  stats: any;
  tempAvg: number;
  tempMax: number;
  tempMin: number;
  
  constructor(
    // private _weatherService: WeatherService,
    private _http: HttpClient
    ) { }

  ngOnInit() {
    this.getBurbank();
  }

  getBurbank(){
    console.log(`made it to getBurbank in burbank.component.ts`)
    let observable = this._http.get('http://api.openweathermap.org/data/2.5/weather?id=5331835&APPID=');
    // API url does not work without a private API key. Add it after the "=" in the url.
    observable.subscribe(data => {
      console.log(data)
      //Convert Average Temperature from Kelvin to Fahrenheit
      var kelvinAvg = data['main'].temp;
      var tempFarAvg = (1.8 * (kelvinAvg - 273.15)) + 32;
      this.tempAvg = Math.round(tempFarAvg);
      
      //Convert Max Temperature from Kelvin to Fahrenheit
      var kelvinMax = data['main'].temp_max;
      var tempFarMax = (1.8 * (kelvinMax - 273.15)) + 32;
      this.tempMax = Math.round(tempFarMax);
      
      //Convert Min Temperature from Kelvin to Fahrenheit
      var kelvinMin = data['main'].temp_min;
      var tempFarMin = (1.8 * (kelvinMin - 273.15)) + 32;
      this.tempMin = Math.round(tempFarMin);

      this.stats = data;
    })

  }

}
