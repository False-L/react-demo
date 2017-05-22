import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users',{},{idAttribute:"author_id"});

const article = new schema.Entity('articles', { 
    author: user,
});
const data={
"success":true,
"data":{
    "id":"5433d5e4e737cbe96dcef312",
    "author_id":"504c28a2e2b845157708cb61",
    "tab":"share",
    "content":"文章",
    "author":{
        "avatar_url":"hhttp",
        "loginname":"alsontang"
    }
}
}
const normalizedData = normalize(data.data, article);
console.log(normalizedData)