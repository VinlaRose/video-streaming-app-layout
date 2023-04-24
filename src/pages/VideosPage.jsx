import { useContext } from "react"
import { VideoContext } from "../context/VideoContext"
import { VideoCard } from "../components/VideoCard"

export const VideosPage = () => {
    const {items} = useContext(VideoContext)
    return(
        <div style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>
           {items.map((item) => (
            <div key={item.id}>
                <VideoCard {...item} />
            </div>
           ))} 
        </div>
    )
}