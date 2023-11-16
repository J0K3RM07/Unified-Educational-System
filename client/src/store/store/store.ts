import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "../roleReducer/roleReducer"

export const store = configureStore({
	reducer: {
		role: roleReducer
	}
});
