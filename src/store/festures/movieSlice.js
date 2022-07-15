import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  totals: 0,
};
const apiUrl = import.meta.env.VITE_APP_API_URL;

// 请求电影列表
const getMovieListApi = () =>
  fetch(`${apiUrl}/movies`).then((res) => res.json());

// thunk函数允许执行异步逻辑, 通常用于发出异步请求。
// createAsyncThunk 创建一个异步action，方法触发的时候会有三种状态：
// pending（进行中）、fulfilled（成功）、rejected（失败）
export const getMovieData = createAsyncThunk("movie/getMovie", async () => {
  const res = await getMovieListApi();
  return res;
});

// 创建一个 Slice
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // 数据请求完触发
    loadDataEnd: (state, { payload }) => {
      state.list = payload;
      state.totals = payload.length;
    },
  },
  // extraReducers 字段让 slice 处理在别处定义的 actions，
  // 包括由 createAsyncThunk 或其他slice生成的actions。
  extraReducers(builder) {
    builder
      .addCase(getMovieData.pending, (state) => {
        console.log("🚀 ~ 进行中！");
      })
      .addCase(getMovieData.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ fulfilled", payload);
        state.list = payload;
        state.totals = payload.length;
      })
      .addCase(getMovieData.rejected, (state, err) => {
        console.log("🚀 ~ rejected", err);
      });
  },
});

// 导出方法
export const { loadDataEnd } = movieSlice.actions;

// 默认导出
export default movieSlice.reducer;
