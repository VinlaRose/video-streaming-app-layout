import { useContext } from "react"
import { VideoContext } from "../context/VideoContext"
import { VideoCard } from "../components/VideoCard"

export const WatchLaterPage = () => {
    const {uniqueArray} = useContext(VideoContext)
    
//     const uniqueArray = watchLater.filter((obj, index, self) =>
//     index === self.findIndex((o) => o.id === obj.id)
//   );
  

    return(
        <div style={{ display: "flex",
        flexDirection: "row",  flexWrap: "wrap",}}>



           {uniqueArray?.length ?  uniqueArray.map((item) => (
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