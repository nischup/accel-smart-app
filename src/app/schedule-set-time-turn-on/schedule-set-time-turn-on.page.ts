import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-set-time-turn-on',
  templateUrl: './schedule-set-time-turn-on.page.html',
  styleUrls: ['./schedule-set-time-turn-on.page.scss'],
})
export class ScheduleSetTimeTurnOnPage implements OnInit {

  hour: number | string = '';  
  minute: number | string = ''; 
  timePeriod: string = 'PM';  

  constructor() { }

  ngOnInit() {
  }

}
