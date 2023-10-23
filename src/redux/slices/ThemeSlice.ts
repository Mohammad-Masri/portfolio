import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Moods } from "@/constants";

type State = {
  theme: Moods;
};

const initialState: State = {
  theme: Moods.Light,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, actions: PayloadAction<Moods>) => {
      state.theme = actions.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
