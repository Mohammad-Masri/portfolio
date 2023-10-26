import { configureStore } from "@reduxjs/toolkit";

import ThemeSlice from "./slices/ThemeSlice";
import MobileMenuSlice from "./slices/MobileMenuSlice";
import MenuItemsSlice from "./slices/MenuItemsSlice";

const reducer = {
  theme: ThemeSlice,
  mobileMenu: MobileMenuSlice,
  menuItems: MenuItemsSlice,
};

export const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
