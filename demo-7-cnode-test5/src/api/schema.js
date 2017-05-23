import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users',{

});

const comment = new schema.Entity('comments', {
  commenter: user
});
 
const article = new schema.Entity('articles', { 
    author: user,
    comments: [ comment ]
});
const data={
  "id": "123",
  "author_id":"1",
  "author": {
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }
  ]
}

const normalizedData = normalize(data, article);
console.log(normalizedData)


import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users',{},{idAttribute:"loginname"});
const article = new schema.Entity('articles',{
  author:user
});
const feedScema={
  data:[article]
}
export function fetchPosts(cnode){
    return dispatch=>{
        dispatch(requestPosts(cnode))
        return fetch(`https://cnodejs.org/api/v1/topics?tab=${cnode}&limit=30`)
        .then(res=>res.json()).then(res=>console.log(normalize(res, feedScema)))
        .then(json=>dispatch(receivePosts(cnode,json)))
    }
}