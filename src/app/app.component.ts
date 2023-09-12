import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  circles: any[] = [];
  addCircle() {
    const circle = { isGrey: false };
    this.circles.push(circle);
  }
  toggleCircleColor(circle: any) {
    circle.isGrey = !circle.isGrey;
  }
  getGreyCircleCount() {
    return this.circles.filter(circle => circle.isGrey).length;
  }
  
  
}
