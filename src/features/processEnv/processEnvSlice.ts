import { createSlice } from '@reduxjs/toolkit';

export interface IProcessEnvState {
  client_id: string | null;
  redirect_uri: string | null;
}

const initialState: IProcessEnvState = {
  client_id: null,
  redirect_uri: null,
};

export const processEnvSlice = createSlice({
  name: 'processEnv',
  initialState,
  reducers: {
    set: (state) => {
      (state.client_id = process.env.CLIENT_ID ? process.env.CLIENT_ID : null),
        (state.redirect_uri = process.env.REDIRECT_URI
          ? process.env.REDIRECT_URI
          : null);
    },
  },
});

export const { set } = processEnvSlice.actions;

export default processEnvSlice.reducer;
