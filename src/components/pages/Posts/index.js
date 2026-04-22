import React, { useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    axios.get(url).then((res)=>{
      setPosts(res.data);
    })
  }, []);


  return(
    <>
      {
        posts && posts.map((post)=>{
          return(
            <p>{post.title.rendered}</p>
          )
      })
      
      }
    </>
  )
}
export default Posts;