import { Component, OnInit, NgZone, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  temperature: number = 25;
  temperaturePercent: number = 0;
  dragging: boolean = false;
  maxTemperature: number = 30;
  minTemperature: number = 15;

  constructor(private ngZone: NgZone) { 
    this.updateTemperaturePercent();
  }

  ngOnInit() {
    console.log('Component initialized');
  }

  updateTemperaturePercent() {
    this.temperaturePercent = ((this.temperature - this.minTemperature) / (this.maxTemperature - this.minTemperature)) * 100;
    console.log('Temperature Percent Updated:', this.temperaturePercent);
  }

  startDrag(event: MouseEvent) {
    this.dragging = true;
    console.log('Drag started');
  }

  @HostListener('window:mousemove', ['$event'])
  onDrag(event: MouseEvent) {
    if (this.dragging) {
      const element = document.querySelector('.temperature-control') as HTMLElement;
      const rect = element.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percent = (offsetX / rect.width) * 100;
      this.temperaturePercent = Math.min(Math.max(percent, 0), 100);
      console.log('Dragging:', this.temperaturePercent);
      this.updateTemperatureFromPercent();
      this.ngZone.run(() => {}); // Ensure change detection is triggered
    }
  }

  @HostListener('window:mouseup', ['$event'])
  stopDrag(event: MouseEvent) {
    if (this.dragging) {
      this.dragging = false;
      console.log('Drag stopped');
    }
  }

  updateTemperatureFromPercent() {
    this.temperature = this.minTemperature + (this.temperaturePercent / 100) * (this.maxTemperature - this.minTemperature);
    console.log('Temperature Updated:', this.temperature);
  }
}
