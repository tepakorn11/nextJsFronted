import { configureStore } from '@reduxjs/toolkit'
import {profileReducer, roadmapReducer} from '@/redux/slices/profileSlice'
import menuReducer from '@/redux/slices/menuSlice'
import showcaseReducer from '@/redux/slices/showcaseSlice'




export const store = configureStore({
  reducer: {
    profile: profileReducer,
    menu: menuReducer,
    roadmap:roadmapReducer,
    showcase:showcaseReducer,
    
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
