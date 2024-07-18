import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  temperature: number = 25;
  temperaturePercent: number = 0; // Initialize the property

  constructor() { 
    this.updateTemperaturePercent();
  }

  ngOnInit() {}

  updateTemperaturePercent() {
    // Assuming the temperature range is between 15 and 30 degrees
    this.temperaturePercent = ((this.temperature - 15) / 15) * 100;
  }
}
