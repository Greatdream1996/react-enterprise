import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 异步dispatch
const fetchAction = createAsyncThunk('fetchAction', async () => {})
const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    }
  },
  extraReducers: {
    [fetchAction.fulfilled](state, action) {}
  }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
