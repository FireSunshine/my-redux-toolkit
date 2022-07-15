import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './festures/counterSlice';
import movieSlice from './festures/movieSlice';

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer:{
    counter: counterSlice,
    movie: movieSlice
  }
})

export default store;