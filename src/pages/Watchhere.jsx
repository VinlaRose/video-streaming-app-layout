import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoContext } from "../context/VideoContext"
import { VideoCard } from "../components/VideoCard"


export const WatchHere = () => {
    
const {videoId} = useParams();
const {items} = useContext(VideoContext);
console.log(items);
console.log(videoId)
const requiredVideo = items.filter((item)=> item.id === Number(videoId));
console.log(requiredVideo)
    return(
        <div style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>
           {requiredVideo.map((item) => (
            <div key={item.id}>
                <VideoCard {...item} showDescription showDuration />
            </div>
           ))}
        </div>
    )
}