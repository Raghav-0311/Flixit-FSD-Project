import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movie: [],
  genresLoaded: false,
  genres: [],
};

const FlixitSlice = createSlice({
  name: "Flixit",
  initialState,
  extraReducers: (builder) => {},
});

export const store = configureStore({
  reducer: {
    flixit: FlixitSlice.reducer,
  },
});
