import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-circle-slide',
  templateUrl: './circle-slide.page.html',
  styleUrls: ['./circle-slide.page.scss'],
})
export class CircleSlidePage implements OnInit, AfterViewInit {
  @ViewChild('knob') knob!: ElementRef;
  private radius = 80;
  private centerX = 100;
  private centerY = 100;
  private dragging = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.knob) {
      this.knob.nativeElement.addEventListener('mousedown', this.startDrag.bind(this));
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.dragging) {
      this.updateKnobPosition(event);
    }
  }

  @HostListener('window:mouseup')
  onMouseUp() {
    this.dragging = false;
  }

  startDrag(event: MouseEvent) {
    this.dragging = true;
    this.updateKnobPosition(event);
  }

  updateKnobPosition(event: MouseEvent) {
    const target = event.target as SVGElement;
    if (target) {
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left - this.centerX;
      const y = event.clientY - rect.top - this.centerY;
      const angle = Math.atan2(y, x);
      const knobX = this.centerX + this.radius * Math.cos(angle);
      const knobY = this.centerY + this.radius * Math.sin(angle);
      if (this.knob) {
        this.knob.nativeElement.setAttribute('cx', knobX.toString());
        this.knob.nativeElement.setAttribute('cy', knobY.toString());
      }
    }
  }
}
