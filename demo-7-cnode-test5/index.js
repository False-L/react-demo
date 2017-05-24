import { normalize, schema } from 'normalizr';
import fetch from 'isomorphic-fetch'

const user = new schema.Entity('users',{},{idAttribute:"loginname"});
const article = new schema.Entity('articles',{
  author:user
});
const feedScema={
 data:[article]
}  
fetch(`https://cnodejs.org/api/v1/topics?tab=all&limit=30`)
        .then(res=>res.json()).then(res=>normalize(res,feedScema))
        .then(res=>console.log(res))
//const normalizedData = normalize(data.data, article);
