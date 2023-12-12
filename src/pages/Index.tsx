import React, { useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import { Podcast } from "../components/podcast/podcast.component";
import { emptyEpisode } from "../model/episode.model";
import { NowPlaying } from "../components/playing/playing.component";
import { EpisodeList } from "../components/episode-card/episode-list.component";
import { Typography } from "antd";
import { loginDialog } from "../api";

const IndexPage: React.FC = () => {
  
  useEffect(() => {
    loginDialog().then(resp => {
      console.log("resp: ", resp)
    }).catch(error => {
      console.log(error)
    })
  },[])
  return <AppLayout>
    <Typography.Title level={4} style={{ textAlign: "center", marginTop:0}}>Faith Tabernacle Podcast</Typography.Title>
    <EpisodeList episodes={[]} />
    <Podcast episode={emptyEpisode} />
    <NowPlaying episode={emptyEpisode} />
  </AppLayout>;
};

export default IndexPage;
