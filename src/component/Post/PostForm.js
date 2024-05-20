import React from 'react'
import style from '../../assets/css/post.module.css'
import { Link } from 'react-router-dom'
export default function PostForm({post}) {
  return (
    <div>

        <div className={style.postForm} key={post.id}>
            <Link to={`${post.id}`} className={style.postTitle}> <div className={style.postIcon}> <i className="bi bi-pencil-square "></i> </div>  <label className='postlink'>  Post: </label>< span>{post.id}</span></Link> 
            <div className={style.list}>
           <div className={style.label}><label> </label><span>{post.title}</span> </div> 
           <div className={style.description}><label></label><span>{post.description}</span> </div> 
           
            </div>
           <div className={style.view}> <Link to={`${post.id}`} className={style.delete} > <i class="bi bi-trash3"></i></Link><label>  views: </label><span>{post.views}</span> </div> 
          
            
        </div>
    </div>
  )
}
