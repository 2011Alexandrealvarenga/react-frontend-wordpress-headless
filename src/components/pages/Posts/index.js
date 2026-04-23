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
            <>
              <h3>{post.title.rendered}</h3>
              <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
            </>
          )
      })
      
      }
    </>
  )
}
export default Posts;