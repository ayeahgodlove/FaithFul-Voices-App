import { IBaseState } from "./config/base-state.model";
import { IResponseBase } from "./config/response-base.model";
export interface ILike {
  id: string;
  episodeId: string;
  userId: string;
}

export const emptyLike: ILike = {
    id: "",
    episodeId: "",
    userId: ""
};

export interface ILikeState extends IBaseState {
  readonly likes: ILike[];
  readonly like: ILike;
}

export interface ILikeResponse extends IResponseBase {
  data: ILike;
}

export interface ILikeResponses extends IResponseBase {
  data: ILike[];
}
