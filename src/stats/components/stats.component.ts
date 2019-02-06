import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { RestService } from '../../shared/services/rest.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  private _gistDates: string[] = [];
  private _fileDates: string[] = [];

  public gistCountChart: any = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Gist created'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Gists',
        data: []
      }
    ],
    xAxis: {
      labels: {
        formatter: (axis) => {
          // TODO: add proper date formatting
          return this._gistDates[axis.value];
        }
      }
    }
  } as Highcharts.Options);

  public fileCountChart: any = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Files per gist'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Files',
        data: []
      }
    ],
    xAxis: {
      labels: {
        formatter: (axis) => {
          // TODO: add proper date formatting
          return this._fileDates[axis.value];
        }
      }
    }
  } as Highcharts.Options);

  constructor(private _rest: RestService) {
    this.fetchGistsCount();
    this.fetchFilesCount();
  }

  public fetchGistsCount() {
    this._rest.getCountOfGistsCreatedAfter(this._getSince(this._gistDates)).then(count => this.gistCountChart.addPoint(count));
  }

  public fetchFilesCount() {
    this._rest.getCountOfFilesCreatedAfter(this._getSince(this._fileDates)).then(count => this.fileCountChart.addPoint(count));
  }

  private _getSince(array: string[]): string {
    const currentDate = new Date();
    let since = null;

    if (!array.length) {
      currentDate.setSeconds(currentDate.getSeconds() - 5);
      since = currentDate.toISOString();
    } else {
      since = array[array.length - 1];
    }

    array.push(currentDate.toISOString());

    return since;
  }
}
