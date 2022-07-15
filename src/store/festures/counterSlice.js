import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  title: "redux toolkit pre",
};

// 创建一个 slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    increment: (state, { payload }) => {
      state.value += payload.value;
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;
