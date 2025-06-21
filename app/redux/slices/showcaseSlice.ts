import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShowCase } from '@/interface/showcase';

interface ShowcaseState {
    data: IShowCase[]
    loading: boolean

}

const initialState: ShowcaseState = {
    data: [],
    loading: false,
};

const showcaseSlice = createSlice({
    name: 'showcase',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setShowCase: (state, action: PayloadAction<IShowCase[]>) => {
            state.data = action.payload;
            state.loading = false;

        }
    },
});

export const {setShowCase, setLoading } = showcaseSlice.actions;

export default showcaseSlice.reducer;