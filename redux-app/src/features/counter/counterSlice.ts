import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";
import type { RootState, AppThunk } from "../../app/store";

interface CounterState {
    value: number
}

const initialState:CounterState={
  value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value+=1;
        },
        decrement: (state)=>{
            state.value-=1;
        },
        incrementByAmmount: (state, action:PayloadAction<number>)=>{
            state.value +=action.payload;
        }
    }
}); 

export const { increment, decrement, incrementByAmmount } = counterSlice.actions;
export default counterSlice.reducer;

export const selectCount = (state: RootState):number=>{
    return state.counter.value
}