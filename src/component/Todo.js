import React from 'react'
import { useQuery } from '@tanstack/react-query'
import TimeAgo from 'react-timeago'
export default function Todo() {

   const result = useQuery({
    queryKey : ['Users'] , 
    queryFn : async() =>
    await fetch('https://jsonplaceholder.typicode.com/todos/10').then((res) =>
      res.json()
  ),
    
   })
    
   
   
   if(result.isPending){
   return <h3>Loading ...</h3>
   }
   if(result.error){
    return "Error" + result.error.message
   }
  return (
    <div>
      <span>update time:</span><TimeAgo date={result.dataUpdatedAt} > </TimeAgo>  
      <p style={{color:'red'}}>{result.fetchStatus}</p>  
      <h3> {result.data.title}</h3> 
      </div>
  )
}
