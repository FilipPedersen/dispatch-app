import { Component, Input, OnInit } from '@angular/core';
import { Conditions, Report, WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  styleUrls: ['./metar.component.scss'],
})
export class MetarComponent implements OnInit {
  metarData: Conditions | null = null;
  weatherReport: WeatherData | null = null;
  @Input() isLoading: boolean = false;
  @Input() icaoCode: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.weatherData$.subscribe((data) => {
      this.metarData = data?.report.conditions || null;
      this.weatherReport = data || null;
    });
  }
}
