import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import webReducer from './WebCam/redux/reducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["webReducer"],
};

const rootReducer = {
  webReducer
};

const combinedReducer = combineReducers(rootReducer);

export default persistReducer(persistConfig, combinedReducer);
