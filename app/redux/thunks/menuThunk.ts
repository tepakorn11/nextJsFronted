import { fetchMenuFromApi } from "../services/menuService";
import { setLoading, setMenu } from "../slices/menuSlice";
import type { AppDispatch } from "../store";

export const fetchMenu = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading())
    const data = await fetchMenuFromApi()
    dispatch(setMenu(data))

}