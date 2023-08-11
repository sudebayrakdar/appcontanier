//using AppContainer.Models;
//using Microsoft.AspNetCore.Mvc;

//namespace AppContainer.Controllers
//{
//    public class WeatherController : Controller
//    {
//        public async Task<IActionResult> Index()
//        {
//            var apiKey = "7456a23625188ed9dbd6ebfa21bd9703";
//            var CityWeathers = new List<WeatherModel>();
//            List<string> Cities = new List<string>();
//            Cities.Add("London");
//            Cities.Add("Istanbul");
//            Cities.Add("Berlin");
//            Cities.Add("Tokyo");
//            var _httpClient = new HttpClient();
//            foreach (var cityname in Cities)
//            {
//                var response = await _httpClient.GetAsync($"\"http://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={apiKey}");
//                var WeatherJson = await response.Content.ReadAsStringAsync();
//                var CityObject = WeatherModel.FromJson(WeatherJson);
//                CityWeathers.Add(CityObject);
//            }
//            return View(CityWeathers);
//        }
//    }
//}
using AppContainer.Models;
using Microsoft.AspNetCore.Mvc;

namespace AppContainer.Controllers
{
    public class WeatherController : Controller
    {
        public async Task<IActionResult> Index()
        {
            var apiKey = "7456a23625188ed9dbd6ebfa21bd9703";
            var CityWeathers = new List<WeatherModel>();
            List<string> Cities = new List<string>();
            Cities.Add("Roma");
            Cities.Add("Amerika");
            Cities.Add("Berlin");
            Cities.Add("Milano");
            var _httpClient = new HttpClient();
            foreach (var cityname in Cities)
            {
                var response = await _httpClient.GetAsync($"https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={apiKey}");
                var WeatherJson = await response.Content.ReadAsStringAsync();
                var CityObject = WeatherModel.FromJson(WeatherJson);
                CityWeathers.Add(CityObject);
            }
            return View(CityWeathers);
        }
    }
}