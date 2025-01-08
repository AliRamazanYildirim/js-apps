import { configureStore } from '@reduxjs/toolkit';
import ThemeSlice from '../features/theme/ThemeSlice';

const store = configureStore({
  reducer: {
    theme: ThemeSlice,
  },
});

export default store;