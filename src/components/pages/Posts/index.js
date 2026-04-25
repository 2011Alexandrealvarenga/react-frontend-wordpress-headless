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
    <div className='w-4/5 m-auto flex justify-between align-middle flex-wrap gap-10'>
      {
        posts && posts.map(post =>{
          return(
            <div key={post.id} className="card p-3 w-[300px] shadow-lg rounded-lg flex flex-col border bg">
              <img src="https://placehold.net/400x400.png" alt={post.title.rendered} />
              <h3 className='text-lg font-bold'>{post.title.rendered}</h3>
              <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
            </div>
          )
        })
      
      }
    </div>
    </>
  )
}
export default Posts;