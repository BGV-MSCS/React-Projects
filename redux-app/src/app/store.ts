import { configureStore , combineReducers} from "@reduxjs/toolkit";
import counterReduce from "../features/counter/counterSlice";
import type { Action, ThunkAction } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        counter: counterReduce,
    },
});

//The ReturnType utility type in TypeScript extracts the return type of a given function. 
export type RootState = ReturnType<typeof store.getState>;
//typeof store.getState represents the type of the function (not the return value of the function).
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>