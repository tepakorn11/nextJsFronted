import ax from "@/utility/axios"
import { IWeathers } from '@/interface/weathers';

export const getWeather = async (city: string): Promise<IWeathers> => {
  const res = await ax.get<IWeathers>(`/weather?city=${city}`);
  return res.data;
};
