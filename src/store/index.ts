import { configureStore } from '@reduxjs/toolkit';

import processEnvSliceReducer from '../features/processEnv/processEnvSlice';

import authSliceReducer from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    processEnv: processEnvSliceReducer,
    auth: authSliceReducer,
  },
});
