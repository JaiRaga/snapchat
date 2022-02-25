import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null
  },  
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage += action.payload;
    },
    resetCameraImage: (state, action) => {
      state.cameraImage = null
    }
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectApp = (state) => state.camera.value;

export default cameraSlice.reducer;