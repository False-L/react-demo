import React from 'react'
import {render} from 'react-dom'


 const HomeMain=({posts})=>(
        <div>
            <ol>
                {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
            </ol>
        </div>
)
export default HomeMain