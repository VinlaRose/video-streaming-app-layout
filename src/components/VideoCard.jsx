
import { useContext } from "react";
import { Link } from "react-router-dom";
import { VideoContext } from "../context/VideoContext";

export const VideoCard = (item) => {

    const { id,
        title,
        description,
        duration,
        thumbnail,
        url,
        showDescription,
        showDuration
        } = item

    const {watchLaterHandler} = useContext(VideoContext);
    const {likeHandler} = useContext(VideoContext);

    const containerStyle = {
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "pink",
        width: "300px",
        margin: "30px"
      };
    return(
        <div style={containerStyle}>
            <img style={{height:"300px", width: "300px"}} src= {thumbnail} alt = ""/>
            <p>{title}</p>
            <Link to={`/watchHere/${id}`} >Watch here</Link>
            <br/>
            {showDescription && <p>{description}</p>}
            {showDescription && <p>Duration: {duration}</p>}
            
            <button onClick={()=> likeHandler(item)} >Like</button>
            <button onClick={()=> watchLaterHandler(item)}>Watch Later</button>
            
            
        </div>
    )
}