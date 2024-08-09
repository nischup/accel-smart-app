import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-set-time-turn-off',
  templateUrl: './schedule-set-time-turn-off.page.html',
  styleUrls: ['./schedule-set-time-turn-off.page.scss'],
})
export class ScheduleSetTimeTurnOffPage implements OnInit {

  hour: number | string = '';  
  minute: number | string = ''; 
  timePeriod: string = 'AM';  

  constructor() { }

  ngOnInit() {
  }

}
