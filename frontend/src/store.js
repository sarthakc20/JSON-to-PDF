import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllStudentReducer, getStudentReducer, newStudentReducer, sendMailReducer, updateStudentReducer, uploadReducer } from "./reducer";

const reducer = combineReducers({
  createStudent: newStudentReducer,
  getStudent: getStudentReducer,
  getAllStudent: getAllStudentReducer,
  updateStudent: updateStudentReducer,
  upload: uploadReducer,
  sendMail: sendMailReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;