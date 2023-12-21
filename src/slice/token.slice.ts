import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  tokenService } from "../api";

// Slice

interface TokenState {
  errors: "";
  token: null | string;
  isLoading: boolean;
}

export const initialState: TokenState = {
  errors: "",
  token: "",
  isLoading: false,
};

export const fetchTokenAsync = createAsyncThunk<any, void>(
  "token/fetchTokenAsync",
  async (_, thunkApi) => {
    try {
      return await tokenService.getToken();
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error.data });
    }
  }
);

const slice = createSlice({
  name: "token",
  initialState,
  reducers: {
    tokensSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    },
    setTokenAction: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

const reducer  = slice.reducer;
export { reducer as tokenReducer};

// Actions

export const { tokensSuccess, setTokenAction } = slice.actions;
