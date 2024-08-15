import { Component, Input, OnInit } from '@angular/core';
import { Conditions, ForecastCondition } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent implements OnInit {
  metarData: Conditions | null = null;
  tafData: ForecastCondition[] | null = null;
  @Input() icaoCode: string | null = null;

  @Input() isLoading: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.weatherData$.subscribe((data) => {
      this.metarData = data?.report.conditions || null;
      this.tafData = data?.report.forecast.conditions || null;
    });
  }
}
