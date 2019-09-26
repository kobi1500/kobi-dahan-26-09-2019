const oneDayForecast = JSON.parse(`[
  {
    "LocalObservationDateTime": "2019-08-13T04:11:00+03:00",
    "EpochTime": 1565658660,
    "WeatherText": "Clear",
    "WeatherIcon": 33,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": false,
    "Temperature": {
      "Metric": {
        "Value": 23.7,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 75,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  }
]`);

const fiveDayForecast = JSON.parse(`{
    "Headline": {
      "EffectiveDate": "2019-08-13T08:00:00+03:00",
      "EffectiveEpochDate": 1565672400,
      "Severity": 7,
      "Text": "Very warm Tuesday",
      "Category": "heat",
      "EndDate": "2019-08-13T20:00:00+03:00",
      "EndEpochDate": 1565715600,
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2019-08-13T07:00:00+03:00",
        "EpochDate": 1565668800,
        "Temperature": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 91,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
      },
      {
        "Date": "2019-08-14T07:00:00+03:00",
        "EpochDate": 1565755200,
        "Temperature": {
          "Minimum": {
            "Value": 74,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 91,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
      },
      {
        "Date": "2019-08-15T07:00:00+03:00",
        "EpochDate": 1565841600,
        "Temperature": {
          "Minimum": {
            "Value": 75,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 93,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
      },
      {
        "Date": "2019-08-16T07:00:00+03:00",
        "EpochDate": 1565928000,
        "Temperature": {
          "Minimum": {
            "Value": 76,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 89,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
      },
      {
        "Date": "2019-08-17T07:00:00+03:00",
        "EpochDate": 1566014400,
        "Temperature": {
          "Minimum": {
            "Value": 77,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 89,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
      }
    ]
  }`);

const searchReducer = (
  state = {
    oneDayForecast: oneDayForecast,
    fiveDayForecast: fiveDayForecast
  },
  action
) => {
  switch (action.type) {
    case "oneDay":
      return {
        oneDayForecast: action.oneDayForecast,
        fiveDayForecast: state.fiveDayForecast
      };
    case "fiveDay":
      return {
        oneDayForecast: state.oneDayForecast,
        fiveDayForecast: action.fiveDayForecast
      };
    default:
      return state;
  }
};

export default searchReducer;
