import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IEpisode, IEpisodeState, emptyEpisode } from "../model/episode.model";
import { episodeService } from "../api";

// Slice

export const initialState: IEpisodeState = {
  episodes: [],
  errors: "",
  episode: emptyEpisode,
  isLoading: false,
  initialFetch: true,
};

export const fetchEpisodesAsync = createAsyncThunk<IEpisode[], void>(
  "activity/fetchEpisodesAsync",
  async (_, thunkApi) => {
    try {
      return await episodeService.getEpisode();
    } catch (error: any) {
      return thunkApi.rejectWithValue({ error: error.data });
    }
  }
);

const slice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    fetchEpisodesRequest: (state) => {
      state.isLoading = true;
    },
    episodesSuccess: (state, action: PayloadAction<IEpisode[]>) => {
      state.episodes = action.payload;
      state.isLoading = false;
    },
    setEpisodeAction: (state, action: PayloadAction<IEpisode>) => {
      state.episode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEpisodesAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEpisodesAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.initialFetch = false;
      state.episodes = action.payload;
    });
    builder.addCase(fetchEpisodesAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

const reducer  = slice.reducer;
export { reducer as episodeReducer};
// Actions

export const { episodesSuccess, setEpisodeAction, fetchEpisodesRequest } =
  slice.actions;
