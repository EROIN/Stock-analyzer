import {createSlice} from '@reduxjs/toolkit';

import {incrementAsync} from './counter.actions';

const initialState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = 'failed';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
export * from './counter.actions';
export * from './counter.selectors';
