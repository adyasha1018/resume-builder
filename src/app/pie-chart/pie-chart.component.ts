import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})

export class PieChartComponent implements OnInit {

  options;
  data;
  ngOnInit() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d) { return d.company; },
        y: function(d) { return d.year; },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
            margin: {
                top: 5,
                right: 35,
                bottom: 5,
                left: 0
            }
        },
        tooltip: {
              contentGenerator: function (e) {
              console.log('elementClick in callback', e);
            }
          }
        }
      };

    this.data =  [
            {
                company: 'UST Global',
                year: 1
            },
            {
                company: 'Reactore Solutions',
                year: 3
            },
            {
                company: 'Sophos',
                year: 1
            }
        ];
  }
}
