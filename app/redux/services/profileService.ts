import type { IProfile,IRoadMap } from '@/interface/profile'

export const fetchProfileFromApi = async (): Promise<IProfile> => {
  const data = await import('@/mock/mock-profile')
  return data.default.mockProfile   
}

export const fetchRoadMapFromApi = async (): Promise<IRoadMap[]> => {
  const data = await import('@/mock/mock-profile')
  return data.default.MockRoadMap   
}
