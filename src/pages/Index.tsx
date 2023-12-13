import React, { useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import { Podcast } from "../components/podcast/podcast.component";
import { emptyEpisode } from "../model/episode.model";
import { NowPlaying } from "../components/playing/playing.component";
import { EpisodeList } from "../components/episode-card/episode-list.component";
import { Typography } from "antd";

const IndexPage: React.FC = () => {
  useEffect(() => {
    const client_id = process.env.VITE_APP_CLIENT_ID;
    const client_secret = process.env.VITE_APP_CLIENT_SECRET;
    const uri = "https://api.podbean.com/v1/oauth/token";
    const authString = `${client_id}:${client_secret}`;
    const base64AuthString = btoa(authString);
    // base 64 encode client_id and client_secret to use basic authentication scheme
    const auth = "Basic " + base64AuthString;

    // set post request params
    const options = {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Accept: "*/*",
        Authorization: auth,
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
      },
    };

    // fetch
    fetch(uri, options)
      .then((res) => res.json())
      .then((data) => {
        debugger;
        return console.log(data);
      })
      .catch((err) => {
        console.log("error: ", err.message);
      });
  }, []);
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
