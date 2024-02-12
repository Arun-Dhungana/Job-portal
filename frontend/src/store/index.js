import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer, { setUser, clearUser } from "./usersslice.js";
import companyReducer, { setCompany, clearCompany } from "./company.js";
export const store = configureStore({
  reducer: { user: userReducer, company: companyReducer },
});
export { setUser, clearUser, setCompany, clearCompany };
