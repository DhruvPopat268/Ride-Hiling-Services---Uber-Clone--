import { createSlice } from '@reduxjs/toolkit'

export const formReducer = createSlice({
    name: 'form',
    initialState: {
        formdata: {}
    },
    reducers: {
        setFormData(state, action) {
            state.formdata = action.payload;
        }
    }
})

export const { setFormData } = formReducer.actions
export default formReducer.reducer
