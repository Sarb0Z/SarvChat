import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./components/stateSlices/signupSlice";
import signinReducer from "./components/stateSlices/signinSlice";
import downloadBookReducer from "./components/stateSlices/bookSlice";
import usersReducer from "./components/stateSlices/usersSlice";
const loggedInUserFromStorage = localStorage.getItem("loggedInUser")
  ? JSON.parse(localStorage.getItem("loggedInUser"))
  : null;
const preloadedState = {
  signin: {
    loggedInUser: loggedInUserFromStorage,
  },
};
export default configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    book: downloadBookReducer,
    users: usersReducer,
  },
  preloadedState,
});