import React from 'react'
import style from '../../assets/css/createForm.module.css'
export default function Input({type , name , placeholder , register , value}) {
  return (
    <div>
        <input className={style.input} {...register(name)} value={value} type={type} placeholder={placeholder} name={name} />
    </div>
  )
}
