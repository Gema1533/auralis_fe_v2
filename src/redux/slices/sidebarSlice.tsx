import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IsideBarSlice {
  open: boolean;
}

const initialState: IsideBarSlice = {
  open: false,
};

const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    modalAction(state: IsideBarSlice, action: PayloadAction<IsideBarSlice>) {
      state.open = action.payload.open;
    },
  },
});


export const { modalAction } = sidebarSlice.actions
export default sidebarSlice.reducer