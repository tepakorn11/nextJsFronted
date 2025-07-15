export interface IWeathers { 
  city: string;
  country: string;
  temperature: string;
  feels_like: string;
  humidity: string;
  weather: {
    en?: string;
    th: string;
  };
  wind_speed: string;
  cloudiness: string;
}
