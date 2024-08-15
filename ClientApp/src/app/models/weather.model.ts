export interface WeatherData {
  report: Report;
  isNearbyAirport: boolean;
  nearbyAirportIcao: string;
}

export interface Report {
  conditions: Conditions;
  forecast: Forecast;
  mos: any;
  windsAloft: any;
}

export interface Conditions {
  text: string;
  ident: string;
  dateIssued: string;
  lat: number;
  lon: number;
  elevationFt: number;
  tempC: number;
  dewpointC: number;
  pressureHg: number;
  pressureHpa: number;
  reportedAsHpa: boolean;
  densityAltitudeFt: number;
  relativeHumidity: number;
  flightRules: string;
  cloudLayers: CloudLayer[];
  cloudLayersV2: CloudLayerV2[];
  weather: string[];
  visibility: Visibility;
  wind: Wind;
  remarks: Remarks;
}

export interface Forecast {
  text: string;
  ident: string;
  dateIssued: string;
  period: Period;
  lat: number;
  lon: number;
  elevationFt: number;
  conditions: ForecastCondition[];
}

export interface CloudLayer {
  coverage: string;
  altitudeFt: number;
  ceiling: boolean;
}

export interface CloudLayerV2 extends CloudLayer {
  type?: string;
}

export interface Visibility {
  distanceSm: number;
  prevailingVisSm: number;
  distanceQualifier?: number;
  prevailingVisDistanceQualifier?: number;
}

export interface Wind {
  speedKts: number;
  gustSpeedKts?: number;
  direction: number;
  from: number;
  variable: boolean;
}

export interface Remarks {
  precipitationDiscriminator: boolean;
  humanObserver: boolean;
  seaLevelPressure: number;
  temperature: number;
  dewpoint: number;
  visibility: object;
  sensoryStatus: string[];
  lightning: string[];
  weatherBeginEnds: object;
  clouds: string[];
  obscuringLayers: string[];
}

export interface Period {
  dateStart: string;
  dateEnd: string;
}

export interface ForecastCondition {
  text: string;
  dateIssued: string;
  lat: number;
  lon: number;
  elevationFt: number;
  relativeHumidity: number;
  flightRules: string;
  cloudLayers: CloudLayer[];
  cloudLayersV2: CloudLayerV2[];
  weather: string[];
  visibility: Visibility;
  wind: Wind;
  period: Period;
}
