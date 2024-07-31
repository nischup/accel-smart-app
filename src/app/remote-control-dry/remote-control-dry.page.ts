import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-remote-control-dry',
  templateUrl: './remote-control-dry.page.html',
  styleUrls: ['./remote-control-dry.page.scss'],
})
export class RemoteControlDryPage implements OnInit {

  temperature: number = 25;
  fanSpeed: string = 'Auto';
  fanSpeeds: string[] = ['Auto', 'High', 'Low'];

  @ViewChild('fanSpeedText', { static: false }) fanSpeedText!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

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

  animateText(animationClass: string) {
    const textElement = this.fanSpeedText.nativeElement;
    this.renderer.removeClass(textElement, 'fade-in');
    this.renderer.removeClass(textElement, 'fade-out');
    this.renderer.addClass(textElement, animationClass);
  }

  previousFanSpeed() {
    this.animateText('fade-out');
    setTimeout(() => {
      const currentIndex = this.fanSpeeds.indexOf(this.fanSpeed);
      const previousIndex = (currentIndex - 1 + this.fanSpeeds.length) % this.fanSpeeds.length;
      this.fanSpeed = this.fanSpeeds[previousIndex];
      this.animateText('fade-in');
    }, 300);
  }

  nextFanSpeed() {
    this.animateText('fade-out');
    setTimeout(() => {
      const currentIndex = this.fanSpeeds.indexOf(this.fanSpeed);
      const nextIndex = (currentIndex + 1) % this.fanSpeeds.length;
      this.fanSpeed = this.fanSpeeds[nextIndex];
      this.animateText('fade-in');
    }, 300);
  }


  animateIcon(event: any) {
    const iconElement = event.target;
    iconElement.classList.add('animate-icon');

    setTimeout(() => {
      iconElement.classList.remove('animate-icon');
    }, 300); 
  }

}
