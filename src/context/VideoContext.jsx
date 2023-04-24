import React, { useEffect, useState} from "react";
import { createContext } from "react";

export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/videos') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              videos: [
                {
                  id: 1,
                  title: 'Introduction to React',
                  description:
                    'Learn the basics of React in this introductory tutorial',
                  url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                  thumbnail:
                    'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
                  duration: '12:35',
                },
                {
                  id: 2,
                  title: 'JavaScript for Beginners',
                  description:
                    'Get started with JavaScript with this beginner-friendly tutorial',
                  url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
                  thumbnail:
                    'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
                  duration: '20:17',
                },
                {
                  id: 3,
                  title: 'Python Crash Course',
                  description:
                    'Learn Python basics in this crash course for beginners',
                  url: 'https://www.youtube.com/watch?v=Z1Yd7upQsXY',
                  thumbnail:
                    'https://i.ytimg.com/vi/Z1Yd7upQsXY/hqdefault.jpg',
                  duration: '15:42',
                },
                {
                  id: 4,
                  title: 'Improve your coding skill set',
                  description:
                    'Learn the basics of React in this introductory tutorial',
                  url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                  thumbnail:
                    'https://i.pinimg.com/originals/c6/bc/01/c6bc016b60029782d51de0f43b6969f1.png',
                  duration: '12:35',
                },
                {
                  id: 5,
                  title: 'Study Vlog',
                  description:
                    'Learn the basics of React in this introductory tutorial',
                  url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                  thumbnail:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDeRqRVoh4_K5GdcaWX0LJ1AvYQKhxXWM73Q&usqp=CAU',
                  duration: '12:35',
                },
                {
                  id: 6,
                  title: 'How to find clients?',
                  description:
                    'Learn the basics of React in this introductory tutorial',
                  url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                  thumbnail:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZJjRU-jkBZwXcSSxckOgqeu3EsY_lcKJ3A&usqp=CAU',
                  duration: '12:35',
                },
               
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Video list not found.',
          })
        }
      }, 2000)
    })
  }

  export const VideoContext = createContext([]);

  export const VideoProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [liked, setLiked] = useState([]);
    const [watchLater, setWatchLater] = useState([])

    const getData = async () => {
        try{
            const response = await fakeFetch('https://example.com/api/videos');
            if(response.status === 200){
                setItems(response.data.videos);
                
                

                
            }
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    const watchLaterHandler = (item) => {
  setWatchLater(()=>[...watchLater, item]);
 
 }

 const uniqueArray = watchLater.filter((obj, index, self) =>
    index === self.findIndex((o) => o.id === obj.id)
  );
 const watchLaterLength = uniqueArray.length;
    

    const likeHandler = (item) => {
        setLiked(()=>[...liked, item])
    }

    const uniqueLikedArray = liked.filter((obj, index, self) =>
    index === self.findIndex((o) => o.id === obj.id)
  );

  const likedLength = uniqueLikedArray.length;


    return(
        <VideoContext.Provider value = {{items, watchLaterHandler, likeHandler, watchLater, liked, watchLaterLength, uniqueArray, uniqueLikedArray, likedLength}}>
            {children}
        </VideoContext.Provider>
    )
  }