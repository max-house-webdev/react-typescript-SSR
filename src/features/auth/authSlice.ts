import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
  authUrl: string;
  authorized: boolean;
  token: string | null;
  userData: {
    name: string;
    avatar: string;
  };
}

const initialState: IAuthState = {
  authUrl: '#',
  authorized: false,
  token: null,
  userData: {
    name: 'Anonymous',
    avatar: '#',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setAuthUrl: (state, action) => {
      state.authUrl = action.payload;
    },
  },
});

export const { setToken, setAuthUrl } = authSlice.actions;

export default authSlice.reducer;
