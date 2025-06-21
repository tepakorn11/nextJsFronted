import { getShowCase } from "../services/showcaseService"
import { setLoading, setShowCase } from "../slices/showcaseSlice"
import type { AppDispatch } from "../store"

export const fetchShowCase = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading())
    const data = await getShowCase()
    dispatch(setShowCase(data))
}