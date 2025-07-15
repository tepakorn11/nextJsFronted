import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeather } from '@/redux/services/weatherService';
import { IWeathers } from '@/interface/weathers';

export const fetchWeather = createAsyncThunk<IWeathers, string>(
  'weather/fetchWeather',
  async (city) => {
    const data = await getWeather(city);
    return data;
  }
);
