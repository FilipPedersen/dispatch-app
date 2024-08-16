import { Component, Input } from '@angular/core';
import { Forecast } from 'src/app/models/weather.model';

@Component({
  selector: 'app-taf',
  templateUrl: './taf.component.html',
  styleUrls: ['./taf.component.scss'],
})
export class TafComponent {
  @Input() tafData: Forecast | null = null;
  @Input() isLoading: boolean = false;

  constructor() {}
}
