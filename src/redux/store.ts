import { configureStore } from "@reduxjs/toolkit";

import ThemeSlice from "./slices/ThemeSlice";
import MobileMenuSlice from "./slices/MobileMenuSlice";

const reducer = {
  theme: ThemeSlice,
  mobileMenu: MobileMenuSlice,
};

export const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
