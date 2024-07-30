import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-circle-slide',
  templateUrl: './circle-slide.page.html',
  styleUrls: ['./circle-slide.page.scss'],
})
export class CircleSlidePage implements OnInit {

  @ViewChild('knob') knob!: ElementRef;

  knobX = 100;
  knobY = 20;
  dragging = false;
  dashArray = 502; // Total length of the circle's circumference
  dashOffset = 502; // Initially fully offset to hide the blue stroke

  constructor() { }

  ngOnInit() {
    // Initialization logic here
  }

  startDrag(event: MouseEvent) {
    this.dragging = true;
  }

  drag(event: MouseEvent) {
    if (!this.dragging) return;

    const svg = event.target as SVGElement;
    const rect = svg.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = 80;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    this.knobX = centerX + radius * Math.cos(angle);
    this.knobY = centerY + radius * Math.sin(angle);

    // Calculate the new dash offset based on the angle
    const circumference = 2 * Math.PI * radius;
    const offset = (angle + Math.PI) / (2 * Math.PI) * circumference;
    this.dashOffset = circumference - offset;
  }

  stopDrag() {
    this.dragging = false;
  }
}
