import { fetchProfileFromApi,fetchRoadMapFromApi } from '../services/profileService'
import { setProfile,setLoading,setRoadmap,setRoadmapLoading } from '../slices/profileSlice'
import type { AppDispatch } from '../store'

export const fetchProfile = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading()) // ✅ เปิด loading
  const data = await fetchProfileFromApi()
  dispatch(setProfile(data)) // ✅ ปิด loading โดย setProfile
}


export const fetchRoadMap = () => async (dispatch: AppDispatch) => {
  dispatch(setRoadmapLoading()) // ✅ เปิด loading
  const data = await fetchRoadMapFromApi()
  dispatch(setRoadmap(data)) // ✅ ปิด loading โดย setProfile
}
