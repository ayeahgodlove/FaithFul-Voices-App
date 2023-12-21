import React, { useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import { Podcast } from "../components/podcast/podcast.component";
import { emptyEpisode } from "../model/episode.model";
import { NowPlaying } from "../components/playing/playing.component";
import { EpisodeList } from "../components/episode-card/episode-list.component";
import { Typography } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useToken } from "../hook/auth/token.hook";

const IndexPage: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const { setToken, token } = useToken();

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently();

        setToken(accessToken);
      } catch (e) {
        console.log("tes err: ", e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <AppLayout>
      <Typography.Title level={4} style={{ textAlign: "center", marginTop: 0 }}>
        Faith Tabernacle Podcast
      </Typography.Title>
      <EpisodeList episodes={[]} />
      <Podcast episode={emptyEpisode} />
      <NowPlaying episode={emptyEpisode} />
    </AppLayout>
  );
};

export default IndexPage;
