import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// interface UserState {
//   boxes: {}[];
// }

const initialState: any = {
  boxes: [],
};

export const boxSlice = createSlice({
  name: "boxSlice",
  initialState,
  reducers: {
    setBoxComponents: (state, action: PayloadAction<any>) => {
      console.log("PAYLOAD", action);
      state.boxes = action.payload;
    },
    clearBoxComponents: (state) => {
      state.boxes = "";
    },
  },
});

export const { setBoxComponents, clearBoxComponents } = boxSlice.actions;

export const getBoxComponents = (state: RootState) => state.boxes;

export const GetBoxesReducer = boxSlice.reducer;
