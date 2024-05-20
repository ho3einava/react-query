import React from 'react'
import { useParams } from 'react-router-dom'
import useGetPostId from '../../hook/useGetPostId'

export default function PostId() {
    const {id} = useParams()
    const {post} = useGetPostId(id)
   console.log(post)
  return (
    <div>
      {id}
    <div>
      
      
      
      
      
    </div>
    </div>
  )
}
