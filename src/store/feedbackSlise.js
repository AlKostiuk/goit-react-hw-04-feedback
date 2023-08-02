const { createSlice } = require('@reduxjs/toolkit');

const feedbackSlice = createSlice({
  name: 'feedBack',
  initialState: {
    good: 0,
    neutral: 0,
    bad: 0,
  },
  reducers: {
    increment(state, action) {
      state[action.payload] += 1;
    },
  },
});

export const { increment } = feedbackSlice.actions;
export const feedBackReducer = feedbackSlice.reducer
