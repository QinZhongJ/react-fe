import { configureStore } from '@reduxjs/toolkit';
// 引入主题换肤store分库
import themeReducer from '@/store/slices/theme';

export const store = configureStore({
  reducer: {
    // 主题换肤store分库
    theme: themeReducer,
    // 可以根据需要在这里继续追加其他分库
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
