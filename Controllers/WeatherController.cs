using Microsoft.AspNetCore.Mvc;
using dispatch_app.Services;

namespace dispatch_app.Controllers;


[ApiController]
[Route("api/backend")]
public class WeatherController : ControllerBase
{
    private readonly WeatherService _weatherService;
    public WeatherController(WeatherService weatherService)
    {
        _weatherService = weatherService;
    }
    [HttpGet("report/{icaoCode}")]
    public async Task<IActionResult> GetWeatherReport(string icaoCode)
    {
        var weatherReport = await _weatherService.GetWeatherReportWithNearbyAirport(icaoCode);
        if (weatherReport is null)
        {
            return NotFound($"Weather report not available for {icaoCode} or nearby airports.");
        }
        return Ok(weatherReport);
    }
}
