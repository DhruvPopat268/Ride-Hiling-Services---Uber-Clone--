import { createSlice } from '@reduxjs/toolkit'

export const captainformReducer = createSlice({
    name: 'captainform',
    initialState: {
        captainformdata: {}
    },
    reducers: {
        setCaptainformdata(state, action) {
            state.captainformdata = action.payload;
        },
        logout(state){
            state.captainformdata = {}
        }
    }
})

export const { setCaptainformdata  , logout } = captainformReducer.actions
export default captainformReducer.reducer
