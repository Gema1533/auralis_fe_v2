import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IloginSlice {
    key :string
}

const initialState : IloginSlice = {
    key : ""
};

const loginSLice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login : (state : IloginSlice , action : PayloadAction<IloginSlice>) => {
        state.key = action.payload.key
    }
  },
});

export const {login} = loginSLice.actions
export default loginSLice.reducer
