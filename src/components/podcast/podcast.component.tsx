import { Typography } from "antd";
import React from "react";
import { ORANGE_LIGHT } from "../../utils/utilities";
import { IEpisode } from "../../model/episode.model";
import { Operation } from "../operation/operation.component";

type Prop = {
    episode: IEpisode
}
export const Podcast: React.FC<Prop> = ({ episode }) => {
    const { id, title, player_url } = episode;
    return (
        <div style={PodCastStyle} key={id}>
            <Typography.Title level={5}>{title}</Typography.Title>
            <audio src={player_url} title={title} ></audio>

            <Operation />
        </div>
    )
}

const PodCastStyle: React.CSSProperties = {
    padding: "10px 24px",
    borderRadius: 10,
    border: '1px solid ' + ORANGE_LIGHT,

}