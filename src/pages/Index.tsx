import React from "react";
import AppLayout from "../layout/AppLayout";
import { Podcast } from "../components/podcast/podcast.component";
import { emptyEpisode } from "../model/episode.model";

const IndexPage: React.FC = () => {
  return <AppLayout>
    <Podcast episode={emptyEpisode} />
  </AppLayout>;
};

export default IndexPage;
