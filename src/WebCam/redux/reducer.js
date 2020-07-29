import types from "./types";

const INITIAL_STATE = {
  imageArray: [],
};

export default function (state = INITIAL_STATE, action) {
  debugger;
  switch (action.type) {
    case types.SAVE_IMAGE_ARRAY:
      return {
        ...state,
        imageArray: [...state.imageArray, action.data],
      };
    default:
      return state;
  }
}
