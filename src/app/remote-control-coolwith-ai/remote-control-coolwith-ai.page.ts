import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-control-coolwith-ai',
  templateUrl: './remote-control-coolwith-ai.page.html',
  styleUrls: ['./remote-control-coolwith-ai.page.scss'],
})
export class RemoteControlCoolwithAiPage implements OnInit {

  temperature: number = 25;

  constructor() { }

  ngOnInit() { }

  increaseTemperature() {
    if (this.temperature < 30) { // Assuming maximum temperature is 30
      this.temperature++;
    }
  }

  decreaseTemperature() {
    if (this.temperature > 15) { // Assuming minimum temperature is 15
      this.temperature--;
    }
  }

}
