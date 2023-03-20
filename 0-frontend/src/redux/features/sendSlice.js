import { createSlice } from "@reduxjs/toolkit"

export const sendSlice = createSlice({
    name: "send",
    initialState: {
        loading: false,
    },
    reducers: {
        showLoading: (state) => {
            state.loading = true
        },
        hideLoading: (state) => {
            state.loading = false
        },
    }
});
export const { showLoading, hideLoading } = sendSlice.actions