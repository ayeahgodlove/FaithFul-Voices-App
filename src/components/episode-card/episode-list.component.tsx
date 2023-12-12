import React from "react";
import { IEpisode } from "../../model/episode.model";
import { Empty, Row } from "antd";
import { EpisodeCard } from "./episode-card.component";

type Prop = {
    episodes: IEpisode[]
}
export const EpisodeList: React.FC<Prop> = ({ episodes }) => {
    return (
        <Row gutter={[16,16]} justify={"center"} style={{ marginBottom: 10}}>
            {
                episodes && episodes.length > 0 ? episodes.map(episode => {
                    return <EpisodeCard episode={episode} />
                }) : <Empty description={"No episodes available at the moment"} />
            }
        </Row>
    )
}