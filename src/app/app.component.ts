import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increase, decrease, clear, countSelector } from './reducers/counter';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  updateAt?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));

  constructor(private store: Store) {
  }

  increase() {
    this.updateAt = Date.now();
    this.store.dispatch(increase());
  }

  decrease() {
    this.updateAt = Date.now();
    this.store.dispatch(decrease());
  }

  clear() {
    this.updateAt = Date.now();
    this.store.dispatch(clear());
  }
}
