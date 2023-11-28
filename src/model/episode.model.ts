import { IBaseState } from "./config/base-state.model";
import { IResponseBase } from "./config/response-base.model";
export interface IEpisode {
  id: string;
  title: string;
  content: string;
  logo: string;
  media_url: string;
  player_url: string;
  permalink_url: string;
  publish_time: number;
  status: string;
  type: string;
  season_number: number;
  episode_number: number;
  apple_episode_type: string;
  transcripts_url: string;
  content_explicit: string;
  object: string;
}

export const emptyEpisode: IEpisode = {
  id: "",
  title: "",
  content: "",
  logo: "",
  media_url: "",
  player_url: "",
  permalink_url: "",
  publish_time: 0,
  status: "",
  type: "",
  season_number: 0,
  episode_number: 0,
  apple_episode_type: "",
  transcripts_url: "",
  content_explicit: "",
  object: ""
};

export interface IEpisodeState extends IBaseState {
  readonly episodes: IEpisode[];
  readonly episode: IEpisode;
}

export interface IEpisodeResponse extends IResponseBase {
  data: IEpisode;
}

export interface IEpisodeResponses extends IResponseBase {
  data: IEpisode[];
}
