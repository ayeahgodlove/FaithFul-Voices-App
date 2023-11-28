import { IBaseState } from "./config/base-state.model";
import { IResponseBase } from "./config/response-base.model";
export interface IFavorite {
  id: string;
  name: string;
  description: string;
}

export const emptyFavorite: IFavorite = {
  id: "",
  name: "",
  description: ""
};

export interface IFavoriteState extends IBaseState {
  readonly favorites: IFavorite[];
  readonly favorite: IFavorite;
}

export interface IFavoriteResponse extends IResponseBase {
  data: IFavorite;
}

export interface IFavoriteResponses extends IResponseBase {
  data: IFavorite[];
}
