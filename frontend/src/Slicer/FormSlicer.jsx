import { createSlice } from '@reduxjs/toolkit'

export const formReducer = createSlice({
    name: 'form',
    initialState: {
        formdata: {}
    },
    reducers: {
        setFormData(state, action) {
            state.formdata = action.payload;
        },
        logout(state){
            state.formdata = {}
        }
    }
})

export const { setFormData  , logout } = formReducer.actions
export default formReducer.reducer
