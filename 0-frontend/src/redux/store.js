import { configureStore } from "@reduxjs/toolkit"
import { sendSlice } from "./features/sendSlice";
export default configureStore({
    reducer: {
        sends: sendSlice.reducer,
    },
});