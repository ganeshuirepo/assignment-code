import { Component, OnInit } from '@angular/core';
// import { SliderType } from 'igniteui-angular';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-rangebar',
  templateUrl: './rangebar.component.html',
  styleUrls: ['./rangebar.component.scss']
})
export class RangebarComponent {

  value: number = 2;
  options: Options = {
    step: 1,
    stepsArray: [
          {value: 1},
          {value: 2, legend: 'Less Relevant'},
          {value: 3, legend: 'Relevant'},
          {value: 4, legend: 'Very Relevant'}
        ],
        getSelectionBarColor: (value: number): string => {
          if (value <= 2) {
            return 'whitesmoke';
        }
          if (value <= 3) {
            return 'whitesmoke';
          }
          if ( value <= 4) {
                return 'whitesmoke';
          }
        },
    showTicksValues: true,
    showTicks: false

  };

}
