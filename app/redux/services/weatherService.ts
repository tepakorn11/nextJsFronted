import axios from 'axios';
import { IWeathers } from '@/interface/weathers';

export const getWeather = async (city: string): Promise<IWeathers> => {
  const res = await axios.get<IWeathers>(`/weather?city=${city}`);
  return res.data;
};
