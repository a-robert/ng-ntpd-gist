import { Component } from '@angular/core';
import { RestService } from '../../shared/services/rest.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  constructor(private _rest: RestService) {
    _rest.getCountOfGistsCreatedAfter(5).then(a => console.log(a));
    _rest.getCountOfFilesCreatedAfter(5).then(a => console.log(a));
  }
}
