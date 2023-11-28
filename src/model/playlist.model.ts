import { IPost } from "./post.model";

export interface IPlayList {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    imageUrl: string;
    posts: IPost[]
}