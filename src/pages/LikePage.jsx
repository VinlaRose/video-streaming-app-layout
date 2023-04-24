import { useContext } from "react"
import { VideoContext } from "../context/VideoContext"
import { VideoCard } from "../components/VideoCard"

export const LikePage = () => {
    const {uniqueLikedArray} = useContext(VideoContext);
    

    return(
        <div style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>
            {uniqueLikedArray?.length ?  uniqueLikedArray.map((item) => (
            <div key={item.id}>
                <VideoCard {...item} />
            </div>
           )) :
           (
            <div></div>
           )}  
        </div>
    )
}