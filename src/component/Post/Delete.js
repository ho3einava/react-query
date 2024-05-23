import { useMutation, useQueryClient } from '@tanstack/react-query'


import axios from 'axios'
import React from 'react'
import BASE_URL from '../../hook/BASE_URL'
export default function Delete({id}) {
     const QueryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey : ["Delete"] ,
        mutationFn : async(id) => {
             await axios.delete(`${BASE_URL}/posts/${id}`)
        },
        onSuccess : () => {
          return QueryClient.invalidateQueries('Delete')
        }

    })
  return (
    <div>
        <i onClick={() => mutation.mutate(id)} className="bi bi-trash3"></i>
    </div>
  )
}
