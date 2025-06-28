import type { IProfile, IRoadMap } from '@/interface/profile'
import ax from "@/utility/axios"

export const fetchProfileFromApi = async (id: number = 1): Promise<IProfile> => {
  const res = await ax.get<IProfile>(`/profile/${id}`);
  return res.data;
};


export const fetchRoadMapFromApi = async (): Promise<IRoadMap[]> => {
  const res = await ax.get<IRoadMap[]>('/road-map', {
  })
  return res.data
}
