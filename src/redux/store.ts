import { configureStore } from "@reduxjs/toolkit";

import ThemeSlice from "./slices/ThemeSlice";

const reducer = {
  theme: ThemeSlice,
};

export const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
