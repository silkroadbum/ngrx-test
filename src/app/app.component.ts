import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  counter= 0;
  updateAt?: number;

  get cannotDecrease(): boolean {
    return this.counter <=0;
  }

  increase() {
    this.updateAt = Date.now();
    this.counter++;
  }

  decrease() {
    this.updateAt = Date.now();
    this.counter--;
  }

  clear() {
    this.updateAt = Date.now();
    this.counter = 0;
  }
}
