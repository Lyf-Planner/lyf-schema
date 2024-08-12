import { DateString } from "./dates"

export type WeatherData = DailyWeatherData[];

export type DailyWeatherData = {
  date: DateString,
  code: number,
  temp_max: number,
  temp_min: number,
  pecipitation_sum: number,
  precipitation_prob: number,
  windspeed: number
}
