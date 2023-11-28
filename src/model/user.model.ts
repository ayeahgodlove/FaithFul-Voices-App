import { IBaseState } from "./config/base-state.model";
import { IResponseBase } from "./config/response-base.model";

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  favoriteEpisodes: string[]
}

export const emptyUser: IUser = {
  id: "",
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  favoriteEpisodes: []
};

export interface IUserState extends IBaseState {
  readonly Users: IUser[];
  readonly User: IUser;
}

export interface IUserResponse extends IResponseBase {
  data: IUser;
}

export interface IUserResponses extends IResponseBase {
  data: IUser[];
}
