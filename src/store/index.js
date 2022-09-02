import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import thunk from "redux-thunk";
import popularReducer from './reducer/popularSlice'
import upcomingReducer from './reducer/upcomingSlice'
import theme from './reducer/theme'


// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// }

// const rootReducer = combineReducers({
//     popular: popularReducer,
//     upcoming: upcomingReducer,
// })

// const persistedReducer = persistReducer(persistConfig,rootReducer)


// export default rootStore = configureStore({
//     reducer: persistedReducer,
//     middleware: [thunk]
//   })
  
// export const persistor = persistStore(rootStore)

export default configureStore({
    reducer: {
        popular: popularReducer,
        upcoming: upcomingReducer,
        theme: theme.themeSlice
    }
})