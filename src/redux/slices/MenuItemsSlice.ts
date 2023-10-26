import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { MenuItem, Moods, navbarItems as NIs } from "@/constants";

type State = {
  menuItems: MenuItem[];
};

const initialState: State = {
  menuItems: NIs.map((i, index) => {
    let isActive = false;
    if (index == 0) isActive = true;
    return {
      id: i.id,
      label: i.label,
      link: `/#${i.id}`,
      isActive,
    };
  }),
};

const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState,
  reducers: {
    setItemAsActive: (state, actions: PayloadAction<string>) => {
      const newNavbarItems = state.menuItems.map((nbi) => {
        if (nbi.id == actions.payload) nbi.isActive = true;
        else nbi.isActive = false;
        return nbi;
      });

      state.menuItems = newNavbarItems;
    },
  },
});

export const { setItemAsActive } = menuItemsSlice.actions;

export const selectMenuItems = (state: RootState) => state.menuItems.menuItems;

export default menuItemsSlice.reducer;
