import { INCREMENT } from './actions';
import { IAppState } from './store';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Normando';
  @select() counter;

  constructor(private ngRedux: NgRedux<IAppState>) {  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
