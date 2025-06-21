import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenu } from "@/interface/menu"

export interface MenuState {
    data: IMenu[],
    loading: boolean
}


const initialState: MenuState = {
    data: [],
    loading: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setMenu: (state, action: PayloadAction<IMenu[]>) => {
            state.data = action.payload
            state.loading = false
        }
    }

})

export const { setLoading, setMenu } = menuSlice.actions
export default menuSlice.reducer