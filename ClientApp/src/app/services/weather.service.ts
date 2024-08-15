import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private historySubject = new BehaviorSubject<string[]>(
    this.getSearchHistory()
  );
  public history$ = this.historySubject.asObservable();

  constructor(private http: HttpClient) {}

  getWeather(icaoCode: string): Observable<WeatherData> {
    const headers = new HttpHeaders().set('x-foreflight-odense', 'true');

    // return this.http.get<WeatherData>(`/weather/report/${icaoCode}`, {
    //   headers: headers,
    // });

    return this.http.get<WeatherData>(
      `https://localhost:7274/api/backend/report/${icaoCode}`,
      {
        headers: headers,
      }
    );
  }

  getSearchHistory(): string[] {
    const history = localStorage.getItem('history');
    return history ? JSON.parse(history) : [];
  }

  addToSearchHistory(icaoCode: string) {
    let history = this.getSearchHistory();
    if (!history.includes(icaoCode)) {
      history.push(icaoCode);
      localStorage.setItem('history', JSON.stringify(history));
      this.historySubject.next(history);
    }
  }

  clearSearchHistory() {
    localStorage.removeItem('history');
    this.historySubject.next([]);
  }
}
