import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-control-coolwith-ai',
  templateUrl: './remote-control-coolwith-ai.page.html',
  styleUrls: ['./remote-control-coolwith-ai.page.scss'],
})
export class RemoteControlCoolwithAiPage implements OnInit {

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
