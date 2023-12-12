import { Space } from "antd"
import { IEpisode } from "../../model/episode.model"
import { BiSkipPrevious, BiSkipNext, BiPlay, BiShuffle, BiRepeat } from "react-icons/bi"
import { ORANGE_LIGHT } from "../../utils/utilities"

type Prop = {
    episode: IEpisode
}
export const NowPlaying: React.FC<Prop> = ({ episode }) => {
    const onPrevious = (event) => {
        console.log(event)
    }

    const onPlay = (event) => {
        console.log(event)
    }

    const onSkipNext = (event) => {
        console.log(event)
    }

    const onShuffle = (event) => {
        console.log(event)
    }

    const onRepeat = (event) => {
        console.log(event)
    }

    return <div style={NowPlayingStyles} key={episode.id}>
        <Space size={"small"} > 
            <BiSkipPrevious size={30} style={IconStyles} onClick={onPrevious} /> 
            <BiPlay size={30} style={IconStyles} onClick={onPlay} /> 
            <BiSkipNext size={30} style={IconStyles} onClick={onSkipNext} /> 
            <BiShuffle size={25} style={IconStyles} onClick={onShuffle} /> 
            <BiRepeat size={25} style={IconStyles} onClick={onRepeat} /> 
        </Space>
        <Space size={"small"}>
            {/* audio player */}
            {/* audio */}
        </Space>
    </div>
}
const IconStyles: React.CSSProperties = {
    cursor: "pointer",
    color: "#DDD"
}
const NowPlayingStyles: React.CSSProperties = {
    background: ORANGE_LIGHT,
    padding: "10px 50px",
    position: "absolute",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0
}