import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increase, decrease, clear, countSelector, updatedAtSelector } from './reducers/counter';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  count$ = this.store.select(countSelector);
  updatedAt$ = this.store.select(updatedAtSelector);
  cannotDecrease$ = this.count$.pipe(map((count) => count <= 0));

  constructor(private store: Store) {
  }

  increase() {

    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  clear() {
    this.store.dispatch(clear());
  }
}
