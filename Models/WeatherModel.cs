namespace dispatch_app.Models;

public class WeatherModel
{
    public Report Report { get; set; }
    public bool IsNearbyAirport { get; set; }
    public string? NearbyAirportIcao { get; set; }
}

public class Report
{
    public Conditions? Conditions { get; set; }
    public Forecast? Forecast { get; set; }
    public object? Mos { get; set; }
    public object? WindsAloft { get; set; }
}

public class Conditions
{
    public string? Text { get; set; }
    public string? Ident { get; set; }
    public string? DateIssued { get; set; }
    public double Lat { get; set; }
    public double Lon { get; set; }
    public double ElevationFt { get; set; }
    public double TempC { get; set; }
    public double DewpointC { get; set; }
    public double PressureHg { get; set; }
    public double PressureHpa { get; set; }
    public bool ReportedAsHpa { get; set; }
    public double DensityAltitudeFt { get; set; }
    public double RelativeHumidity { get; set; }
    public string? FlightRules { get; set; }
    public List<CloudLayer>? CloudLayers { get; set; }
    public List<CloudLayerV2>? CloudLayersV2 { get; set; }
    public List<string>? Weather { get; set; }
    public Visibility? Visibility { get; set; }
    public Wind? Wind { get; set; }
    public Remarks? Remarks { get; set; }
}

public class Forecast
{
    public string Text { get; set; }
    public string Ident { get; set; }
    public string DateIssued { get; set; }
    public Period Period { get; set; }
    public double Lat { get; set; }
    public double Lon { get; set; }
    public double ElevationFt { get; set; }
    public List<ForecastCondition> Conditions { get; set; }
}

public class CloudLayer
{
    public string Coverage { get; set; }
    public double AltitudeFt { get; set; }
    public bool Ceiling { get; set; }
}

public class CloudLayerV2 : CloudLayer
{
    public string Type { get; set; }
}

public class Visibility
{
    public double DistanceSm { get; set; }
    public double PrevailingVisSm { get; set; }
    public double? DistanceQualifier { get; set; }
    public double? PrevailingVisDistanceQualifier { get; set; }
}

public class Wind
{
    public double SpeedKts { get; set; }
    public double? GustSpeedKts { get; set; }
    public double Direction { get; set; }
    public double From { get; set; }
    public bool Variable { get; set; }
}

public class Remarks
{
    public bool PrecipitationDiscriminator { get; set; }
    public bool HumanObserver { get; set; }
    public double SeaLevelPressure { get; set; }
    public double Temperature { get; set; }
    public double Dewpoint { get; set; }
    public object Visibility { get; set; }
    public List<string> SensoryStatus { get; set; }
    public List<string> Lightning { get; set; }
    public object WeatherBeginEnds { get; set; }
    public List<string> Clouds { get; set; }
    public List<string> ObscuringLayers { get; set; }
}

public class Period
{
    public string DateStart { get; set; }
    public string DateEnd { get; set; }
}

public class ForecastCondition
{
    public string Text { get; set; }
    public string DateIssued { get; set; }
    public double Lat { get; set; }
    public double Lon { get; set; }
    public double ElevationFt { get; set; }
    public double RelativeHumidity { get; set; }
    public string FlightRules { get; set; }
    public List<CloudLayer> CloudLayers { get; set; }
    public List<CloudLayerV2> CloudLayersV2 { get; set; }
    public List<string> Weather { get; set; }
    public Visibility Visibility { get; set; }
    public Wind Wind { get; set; }
    public Period Period { get; set; }
}
