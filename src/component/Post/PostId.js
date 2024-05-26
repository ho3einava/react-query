import React from 'react'
import { useParams } from 'react-router-dom'
import BASE_URL from '../../hook/BASE_URL'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import style from '../../assets/css/post.module.css'
import Update from './Update'

export default function PostId() {
  const {id} = useParams()
          
  const {data , isError , error,isPending} = useQuery({
    queryKey : ["posts",id] ,
    queryFn : async () =>
    {
      const res = await axios.get(`${BASE_URL}/posts/${id}`)
      return  res.data
    }
  })
  if(isPending){
    return 'loading ...'
  }
  if(isError){
    console.log(error.message)
  }else{

    console.log('')
  }

         
  return (
    <div className={style.mainPost}>
    <div className={style.postForm}>
      <div className={style.item}>
      <Update post = {data} id={{id}} />
       Post:{id}
      </div>
      
      <div className={style.description}>Title : {data.title}</div>
      <div className={style.description}>Description: {data.description}</div>
      <div className={style.description}>Price :{data?.price}</div>
      
    
    </div>
    </div>
  )
}
