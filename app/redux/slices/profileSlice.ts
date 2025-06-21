import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { IProfile, IRoadMap } from '@/interface/profile'

 interface ProfileState {
  data: IProfile
  loading: boolean
}

const initialState: ProfileState = {
  data: {
    id: '',
    name: '',
    username: '',
    email: '',
    bio: '',
    avatar: '',
    location: '',
    socials: {
      github: '',
      twitter: '',
      linkedin: ''
    },
    joined_at: ''
  },
  loading: false
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setProfile: (state, action: PayloadAction<IProfile>) => {
      state.data = action.payload
      state.loading = false
    }
  }
})

export interface RoadmapState {
  data: IRoadMap[]
  loading: boolean
}

const initialRoadmapState: RoadmapState = {
  data: [],
  loading: false
}


const roadmapSlice = createSlice({
  name: 'roadmap',
  initialState: initialRoadmapState,
  reducers: {
    setRoadmap: (state, action: PayloadAction<IRoadMap[]>) => {
      state.data = action.payload
      state.loading = false
    },
    setRoadmapLoading: (state) => {
      state.loading = true
    }
  }
})

export const { setProfile, setLoading } = profileSlice.actions
export const { setRoadmap, setRoadmapLoading } = roadmapSlice.actions

export const profileReducer = profileSlice.reducer
export const roadmapReducer = roadmapSlice.reducer