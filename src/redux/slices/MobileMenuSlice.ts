import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type State = {
  isOpen: boolean;
};

const initialState: State = {
  isOpen: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setIsOpen: (state, actions: PayloadAction<boolean>) => {
      state.isOpen = actions.payload;
    },
  },
});

export const { setIsOpen } = mobileMenuSlice.actions;

export const selectIsOpen = (state: RootState) => state.mobileMenu.isOpen;

export default mobileMenuSlice.reducer;
