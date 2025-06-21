'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@/redux/store'
import { fetchProfile, fetchRoadMap } from '@/redux/thunks/profileThunk'
import { fetchShowCase } from '@/redux/thunks/showcaseThunk'
import { Description, Roadmap, Showcase } from '@/components/profile'
import { Icon } from '@iconify/react'





export default function ProfilePage() {
  const dispatch = useDispatch<AppDispatch>()
  const { data: profile, loading } = useSelector((state: RootState) => state.profile)
  const { data: roadmap, loading: roadmapLoading } = useSelector((state: RootState) => state.roadmap)
  const { data: showcase, loading: showcaseLoading } = useSelector((state: RootState) => state.showcase)


  useEffect(() => {
    dispatch(fetchProfile())
    dispatch(fetchRoadMap())
    dispatch(fetchShowCase())

  }, [dispatch])

  if (loading || roadmapLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>⏳ Loading...</p>
      </div>
    )
  }


  return (
    <main className="px-4 py-10 space-y-14 max-w-5xl mx-auto">
      <Description profile={profile} />
      <Showcase showcase={showcase} />
      <Roadmap roadmap={roadmap} />
    </main>
  )
}
