import { createSlice } from "@reduxjs/toolkit";
import { MAX_LIVE_CHAT_MESSAGES } from "../constant";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(MAX_LIVE_CHAT_MESSAGES,1);
            state.messages.push(action.payload);
        }
    }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;