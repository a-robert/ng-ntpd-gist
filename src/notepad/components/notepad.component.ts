import { Component } from '@angular/core';

import { ROUTE_STATS } from '../../stats/stats-routing.module';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent {
  public statsRoute: string;

  constructor() {
    this.statsRoute = `/${ROUTE_STATS}`;
  }
}
