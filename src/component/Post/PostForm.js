import React from 'react'
import style from '../../assets/css/post.module.css'
import { Link } from 'react-router-dom'
import Delete from './Delete'


export default function PostForm({post}) {
  return (
    <div>

        <div className={style.postForm} >
            <Link to={`${post.id}`} className={style.postTitle} key={post.id} > <div className={style.postIcon}> <i className="bi bi-pencil-square "></i> </div>  <label className='postlink'>  Post: </label>< span>{post.id}</span></Link> 
            <div className={style.list}>
           <div className={style.label}><label> </label><span>{post.title}</span> </div> 
           <div className={style.description}><label></label><span>{post.description}</span> </div> 
           
            </div>
           <div className={style.view}> <label>  Price: </label><span>{post.price}</span> </div> 
          <Delete id={post.id} />
            
        </div>
    </div>
  )
}
