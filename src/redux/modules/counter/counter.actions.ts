import {AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit';

import {fetchCount} from '../../../middleware/counter.middleware';

export const incrementAsync: AsyncThunk<any, number, {}> = createAsyncThunk(
  'counter/fetchCount',
  async amount => {
    const response: any = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);
