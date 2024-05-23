import React, { useState } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import style from '../../assets/css/createForm.module.css'
import {useForm} from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import BASE_URL from "../../hook/BASE_URL";
import axios from "axios";

export default function Create() { 
  const QueryClient = useQueryClient()
  const {register , handleSubmit , reset} = useForm()
  const [form , setForm] = useState()
  const mutation = useMutation({
    mutationKey : ['CreatePost'] , 
     mutationFn : async() => {
              const res = await axios.post(`${BASE_URL}/posts` ,{
                title : form.title,
                description : form.description,
                price : form.price
              })
              return res.data
     } ,
     onSettled : () => {

       return  QueryClient.invalidateQueries('CreatePost') 
     }
  })

    const onSubmit = (data) => {
        setForm(data)
        mutation.mutate(data)
        reset()
        
        
    }
  return (
    <div>
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Post
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">


              <form className={style.form} 
                onSubmit={handleSubmit(onSubmit)} 
              
              >
                <label>Title: </label>
                <Input register={register}  type={"text"} name={"title"} placeholder={"Title"} />
                <label>Description: </label>
                <TextArea
                  type={"text"}
                  name={"description"}
                  placeholder={"Description"}
                  register={register}
                />
                <label>Price: </label>
                <Input register={register} type={"number"} name={"price"} placeholder={"Price"} />
                       <button type="submit" className="btn btn-dark" data-bs-dismiss="modal" >submit</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
