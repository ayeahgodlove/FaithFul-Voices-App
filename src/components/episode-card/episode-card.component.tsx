import { Card, Col } from "antd"
import { IEpisode } from "../../model/episode.model"

type Prop = {
    episode: IEpisode
}
export const EpisodeCard: React.FC<Prop> = ({ episode }) => {
    return (
        <Col xs={12} md={6} lg={4} key={episode.id}>
            <Card bodyStyle={{ padding:0 }} >
            <img style={{ width: "100%" }} src="/2013calendar.jpg" alt="test" />
            </Card>
        </Col>
    )
}