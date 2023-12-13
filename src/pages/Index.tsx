import React, { useEffect } from "react";
import AppLayout from "../layout/AppLayout";
import { Podcast } from "../components/podcast/podcast.component";
import { emptyEpisode } from "../model/episode.model";
import { NowPlaying } from "../components/playing/playing.component";
import { EpisodeList } from "../components/episode-card/episode-list.component";
import { Typography } from "antd";
import { loginDialog } from "../api";
// import btoa from "btoa";

const IndexPage: React.FC = () => {
  useEffect(() => {
    const client_id = process.env.VITE_APP_CLIENT_ID;
    const client_secret = process.env.VITE_APP_CLIENT_SECRET;
    const uri = "https://api.podbean.com/v1/oauth/token";
    debugger;
    // base 64 encode client_id and client_secret to use basic authentication scheme
    const auth = "Basic " + client_id + ":" + client_secret;

    // set post request params
    const options = {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        authorization: auth,
      },
    };

    // fetch
    fetch(uri, options).then((data) => {
      debugger;
      return console.log(data);
    }).catch(err => {
      console.log("err: ", err.message)
    })

    // loginDialog()
    //   .then((resp) => {
    //     console.log("resp: ", resp);
    //   })
    //   .catch((error) => {
    //     console.log("error: ", error);
    //   });
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
