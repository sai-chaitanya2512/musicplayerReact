import { configureStore } from "@reduxjs/toolkit";
import playList from "./slice/playListSlice";
const store = configureStore({
    reducer : {
        List : playList.reducer,
    }
})
export default store