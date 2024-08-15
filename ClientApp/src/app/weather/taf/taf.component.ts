import { Component, Input, OnInit } from '@angular/core';
import { Forecast, ForecastCondition } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-taf',
  templateUrl: './taf.component.html',
  styleUrls: ['./taf.component.scss'],
})
export class TafComponent {
  @Input() tafData: Forecast | null = null;
  @Input() isLoading: boolean = false;

  constructor(private weatherService: WeatherService) {}
}
