import { Component, Input } from '@angular/core';
import { Conditions } from 'src/app/models/weather.model';

@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  styleUrls: ['./metar.component.scss'],
})
export class MetarComponent {
  @Input() metarData: Conditions | null = null;
  @Input() isNearbyAirport: boolean = false;
  @Input() nearbyAirportIcao: string | null = null;
  @Input() isLoading: boolean = false;
  @Input() icaoCode: string | null = null;

  constructor() {}
}
