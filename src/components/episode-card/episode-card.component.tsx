import { Card, Col, Typography } from "antd";
import { IEpisode } from "../../model/episode.model";
import ReactPlayer from 'react-player/file'

type Prop = {
  episode: IEpisode;
};
export const EpisodeCard: React.FC<Prop> = ({ episode }) => {
  console.log("episode: ", episode);
  return (
    <Col xs={12} key={episode.id}>
      <Card
        title={
          <Typography.Title level={4} style={{ padding: 0, margin: 0 }}>
            {episode.title}
          </Typography.Title>
        }
      >
        <Card.Meta
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: episode.content,
              }}
            />
          }
        ></Card.Meta>
        <ReactPlayer url={episode.media_url} />
        {/* <iframe
          title="Podbean Player"
          width="100%"
          scrolling="no"
          frameBorder="0"
          src={episode.player_url}
        ></iframe> */}
      </Card>
    </Col>
  );
};
