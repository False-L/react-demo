import fetch from 'isomorphic-fetch'
import { normalize, schema } from 'normalizr'

const API_ROOT="https://cnodejs.org/api/v1"


export function fetchtopics(tab,page,schema){
        const fullurl=API_ROOT+`/topcis/?tab=${tab}&page=${page}&limit=30`
        return fetch(fullurl)
        .then(res=>res.json())
        .then(json=>{
            if(!json.success){
                return Promise.reject(json)
            }
            const nextPageUrl=API_ROOT+`/topcis/?tab=${tab}&page=${page+1}&limit=30`
            return Object.assign({},
            normalize(json, schema),
            {nextPageUrl}
            )
        })
}


export function posttool(endpoint){
    const fullurl=API_ROOT+``
    return fetch(fullurl,{
        method:"POST",
        header:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
        body:JSON.stringify({
            a:1,
            b:2
        })
    }).then()
    .catch()
}