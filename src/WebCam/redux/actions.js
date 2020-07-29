import types from "./types";

export const startImageCapturing = () => (dispatch) => {
  dispatch({ type: types.START_IMAGE_CAPTURING });
};

export const stopImageCapturing = () => (dispatch) => {
  dispatch({ type: types.STOP_IMAGE_CAPTURING });
};

export const savePhotos = (images) => (dispatch) => {
  debugger;
  dispatch({ type: types.SAVE_IMAGE_ARRAY, data: images });
};
