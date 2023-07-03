import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoDetails: {},
  },
  reducers: {
    setVideoDetails: (state, action) => {
        console.log("Payload ", action.payload);
        const id = action.payload.items[0]?.id
        if(!state[id]) {
            state.videoDetails[id] = action.payload;
        }
    }
  },
});

export const {setVideoDetails} = videoSlice.actions;

export default videoSlice.reducer;
