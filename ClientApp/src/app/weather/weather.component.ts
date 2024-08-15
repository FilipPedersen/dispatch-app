import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';
import { WeatherData } from 'src/app/models/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData: WeatherData | null = null;
  icaoCode = new FormControl('');
  codeTest: string = '';
  previousSearchedCode: string = '';
  isLoading: boolean = false;
  error: string | null = null;

  private subscriptions = new Subscription();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    const inputSubscription = this.icaoCode.valueChanges
      .pipe(
        distinctUntilChanged(),
        filter((value) => value?.length === 4)
      )
      .subscribe((code) => {
        if (!code) return;
        let formattedCode = code.toUpperCase();
        if (formattedCode !== this.previousSearchedCode) {
          this.previousSearchedCode = formattedCode;
        }
        this.fetchWeather(formattedCode);
        this.weatherService.addToSearchHistory(formattedCode);
      });
    this.subscriptions.add(inputSubscription);
  }

  handleCodeEmit(code: string) {
    let formattedCode = code.toUpperCase();
    this.icaoCode.setValue(formattedCode);
  }

  fetchWeather(icaoCode: string) {
    this.isLoading = true;
    this.error = null;
    this.weatherService.getWeather(icaoCode.toUpperCase()).subscribe({
      next: (data: WeatherData) => {
        this.weatherData = data;
        this.icaoCode.setValue(icaoCode);
        this.isLoading = false;
      },
      error: () => {
        this.error =
          'Could not fetch weather data. Please check the ICAO code or try again later.';
        this.isLoading = false;
      },
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
