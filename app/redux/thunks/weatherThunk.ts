import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeather } from '@/redux/services/weatherService';
import { IWeathers } from '@/interface/weathers';

export const fetchWeather = createAsyncThunk<IWeathers, string, { rejectValue: string }>(
  'weather/fetchWeather',
  async (city, { rejectWithValue }) => {
    try {
      const data = await getWeather(city);
      return data;
    } catch (error: any) {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        'ไม่สามารถดึงข้อมูลอากาศได้';
      return rejectWithValue(msg);
    }
  }
);
