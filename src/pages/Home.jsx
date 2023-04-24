import { useContext } from "react"
import { VideoContext } from "../context/VideoContext"


export const Home = () => {
    const {item} = useContext(VideoContext)
    return(
        <div>
            <h1>Welcome to video library</h1>
            <h1>To view all the video click the button below : </h1>
            <button>Videos</button>

        </div>
    )
}