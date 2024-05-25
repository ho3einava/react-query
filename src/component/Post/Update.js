import { useMutation, useQueryClient } from '@tanstack/react-query'
import style from '../../assets/css/post.module.css'
import Input from './Input'
import TextArea from './TextArea'
import axios from 'axios'
import React, { useState } from 'react'
import BASE_URL from '../../hook/BASE_URL'

import { useForm  } from 'react-hook-form'
export default function Update(post) {
  
 
  const {register ,handleSubmit  } = useForm()
  
  const [form , setForm] = useState()
  const [inputUpdate , setInputUpdate] = useState()
     const QueryClient = useQueryClient()
     const mutation = useMutation({
      mutationKey : ['update'] , 
       mutationFn : async() => {
                const res = await axios.put(`${BASE_URL}/posts/${post.id.id}` ,{
                  title : form.title,
                  description : form.description,
                  price : form.price
                })
                return res.data
       } ,
       onSettled : () => {
  
         return  QueryClient.invalidateQueries('update') 
       }
    })
    const onSubmit = (data) => {
      setForm((data) => [...data , inputUpdate])
      setInputUpdate(data)
     mutation.mutate(data)
     
      
      
  }
  return (
    <div>
       
      
            <div className={style.postIcon} type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <i  className="bi bi-pencil-square "></i>

            </div>
          
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:"#000"}}>Update Post</h1>
        <button type="button" class="btn-close"  aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
      <form className={style.form} 
                onSubmit={handleSubmit(onSubmit)} 
              
              >
                <label>Title: </label>
                <Input register={register} value={post.post.title}  type={"text"} name={"title"} placeholder={"Title"} />
                <label>Description: </label>
                <TextArea
                  type={"text"}
                  name={"description"}
                  placeholder={"Description"}
                  register={register}
                  value={post.post.description}
                />
                <label>Price: </label>
                <Input register={register} value={post.post.price} type={"number"} name={"price"} placeholder={"Price"} />
                       <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Update</button>
              </form>

       
      </div>
     
    </div>
  </div>
</div>
        
    </div>
  )
}
