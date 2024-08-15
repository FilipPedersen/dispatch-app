import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  searchHistory: string[] = [];
  @Output() icaoCode = new EventEmitter<string>();
  private subscriptions = new Subscription();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    const searchHistorySubscription = this.weatherService.history$.subscribe(
      (history) => {
        this.searchHistory = history;
      }
    );
    this.subscriptions.add(searchHistorySubscription);
  }

  clearHistory() {
    this.weatherService.clearSearchHistory();
  }

  emitIcaoCode(icaoCode: string) {
    this.icaoCode.emit(icaoCode);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
