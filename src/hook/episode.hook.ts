import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IRootState } from "../store/store";
import { IEpisode } from "../model/episode.model";
import { setEpisodeAction } from "../slice/episode.slice";
const useEpisode = () => {
  const episodes = useSelector<IRootState, IEpisode[]>(
    (state) => state.episode.episodes
  );
  const isLoading = useSelector<IRootState, boolean>(
    (state) => state.episode.isLoading
  );
  const initialFetch = useSelector<IRootState, boolean>(
    (state) => state.episode.initialFetch
  );
  const episode = useSelector<IRootState, IEpisode>(
    (state) => state.episode.episode
  );

  const dispatch = useDispatch();

  const setEpisode = (episode: IEpisode) => {
    dispatch(setEpisodeAction(episode));
  };

  useEffect(() => {}, [episode, episodes, isLoading]);

  return {
    episode,
    episodes,
    isLoading,
    initialFetch,
    setEpisode,
  };
};

export { useEpisode };
