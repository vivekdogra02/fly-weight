import { createSlice } from '@reduxjs/toolkit';

// The initial state of the ReposManager container
export const initialState = {
  data: [],
  loading: false,
  error: false,
};

const rocketLaunchSlice = createSlice({
  name: 'rocketLaunch',
  initialState,
  reducers: {
    fetch(state) {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    fetchSuccess(state, action) {
      state.data = action.payload.data;
      state.loading = false;
    },
    fetchFailure(state, action) {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const {
  fetch,
  fetchSuccess,
  fetchFailure
} = rocketLaunchSlice.actions

export default rocketLaunchSlice.reducer;
