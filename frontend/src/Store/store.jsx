import {configureStore , combineReducers} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer , persistStore } from 'redux-persist'
import formReducer from '../Slicer/FormSlicer'
import  captainformReducer  from '../Slicer/CaptainFormSlicer'

const persistConfig = {
    key : 'root',
    storage,
}

const rootReducer = combineReducers({
    form:formReducer,
    captainform: captainformReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)