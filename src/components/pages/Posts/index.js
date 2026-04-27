import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
    <h1 className='text-2xl font-bold'>Posts</h1>
    <div className='w-4/5 m-auto flex justify-between align-middle flex-wrap gap-10'>
      {
        Object.keys(posts).length ? posts.map(post =>{
          return(
            <div key={post.id} className="card p-3 w-[300px] shadow-lg rounded-lg flex flex-col border bg">
              <Link to={`/posts/${post.id}`} className=''>
                <img src={post.featured_src} />
                <h3 className='text-lg font-bold'>{post.title.rendered}</h3>
                <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>
              </Link>  
            </div>
          )
        }) : 'Loading...'
      
      }
    </div>
    </>
  )
}
export default Posts;