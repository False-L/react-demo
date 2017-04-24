import React from 'react'
import {Link } from 'react-router-dom'

 const HomeMain=({posts})=>(
        <div>
            <ol>
                {posts.map((post, i) =>
      <li key={i}><Link to={`/topic/${post.id}`} >{post.title}</Link></li>
    )}
            </ol>
        </div>
)
export default HomeMain