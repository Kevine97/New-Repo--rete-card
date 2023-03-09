import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/Test';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import userReducer from './slices/user/user';
import { AppStore } from '../interfaces/IUser/IUser';

const persistConfig = {
    key: 'persistStorage',
    storage,
    whiteList: ['accessToken'],
};

const store = configureStore({
    reducer: {
        auth: persistReducer<ReturnType<typeof authReducer>>(
            persistConfig,
            authReducer
        ),
        user: userReducer
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
