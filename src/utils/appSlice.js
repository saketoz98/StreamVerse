import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchInput: "",
    videoList: []
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setVideoList: (state, action) => {
      state.videoList = action.payload;
    }
  },
});

export const { toggleMenu, closeMenu, setSearchInput, setVideoList} = appSlice.actions;

export default appSlice.reducer;
