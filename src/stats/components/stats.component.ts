import { Component } from '@angular/core';

// import { ROUTE_NOTEPAD } from '../../notepad/notepad-routing.module';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  public notepadRoute: string;

  constructor() {
    // this.notepadRoute = `/${ROUTE_NOTEPAD}`;
  }
}
