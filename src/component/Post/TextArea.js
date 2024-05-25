import React from 'react'

export default function TextArea({name , placeholder ,register , value}) {
  return (
    <div>
        <textarea name={name} {...register(name)}  placeholder={placeholder} rows="5" cols="31" />
    </div>
  )
}
