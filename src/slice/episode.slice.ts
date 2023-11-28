import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index";
import { IEpisodeState, emptyEpisode } from "../model/episode.model";

// Slice

export const initialState: IEpisodeState = {
    episodes: [],
    errors: "",
    episode: emptyEpisode,
    isLoading: false,
    initialFetch: true,
  };

const slice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    episodesSuccess: (state, action) => {
      state.episodes = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

// Actions

const { episodesSuccess } = slice.actions;

export const fetchEpisodes = () => async (dispatch) => {
  try {
    await api
      .get("/episodes")
      .then((response) => dispatch(episodesSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
