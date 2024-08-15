using dispatch_app.Models;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;

namespace dispatch_app.Services;

public class WeatherService
{
    private readonly HttpClient _httpClient;
    private readonly IMemoryCache _cache;
    private readonly Dictionary<string, string> _nearbyAirports = new Dictionary<string, string>
    {
        { "EKHG", "EKKA" },
        { "EKST", "EKOD" },
        { "EKVH", "EKYT" }
    };

    public WeatherService(HttpClient httpClient, IMemoryCache cache)
    {
        _httpClient = httpClient;
        _cache = cache;
        _httpClient.DefaultRequestHeaders.Add("x-foreflight-odense", "true");
    }

public async Task<WeatherModel> GetWeatherReport(string icaoCode)
{
    if (_cache.TryGetValue(icaoCode, out WeatherModel cachedResponse))
    {
        return cachedResponse;
    }

    await Task.Delay(2000); // simulate 2 seconds delay
    var response = await _httpClient.GetAsync($"https://api.foreflight.com/weather/report/{icaoCode}");
    response.EnsureSuccessStatusCode();
    var responseData = await response.Content.ReadAsStringAsync();
    var weatherData = JsonConvert.DeserializeObject<WeatherModel>(responseData);
    _cache.Set(icaoCode, weatherData, TimeSpan.FromMinutes(10));
    return weatherData;
}


public async Task<WeatherModel> GetWeatherReportWithNearbyAirport(string icaoCode)
{
    if (_nearbyAirports.ContainsKey(icaoCode) && _nearbyAirports[icaoCode] == null)
    {
        return null; 
    }
    var weatherReport = await GetWeatherReport(icaoCode);
    if (weatherReport?.Report?.Conditions == null && _nearbyAirports.TryGetValue(icaoCode, out var nearbyIcaoCode))
    {
        var nearbyWeatherReport = await GetWeatherReport(nearbyIcaoCode);
        if (nearbyWeatherReport?.Report?.Conditions != null)
        {
            nearbyWeatherReport.IsNearbyAirport = true;
            nearbyWeatherReport.NearbyAirportIcao = nearbyIcaoCode;
            return nearbyWeatherReport;
        }
    }
    if (weatherReport != null)
    {
        weatherReport.IsNearbyAirport = false;
        weatherReport.NearbyAirportIcao = null;
    }

    return weatherReport;
}
}

