import React, { useEffect, useState } from 'react';
import Post from "../../component/post/Post";

function PostsPage(props) {

  const [posts, setPosts] = useState([])

  const [loading, setLoading] = useState(false)

  const getPosts = () => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
  }

  useEffect(getPosts, [])

  return (
    <div>
      <h1>Posts</h1>
      {
        loading === true
          ?
          <div>Loading...</div>
          :
          posts.map(post => <Post info={post}/>)
      }
    </div>
  );
}

export default PostsPage;