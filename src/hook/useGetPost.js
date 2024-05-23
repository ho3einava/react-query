import axios from 'axios';

import BASE_URL from './BASE_URL';
import { useQuery } from '@tanstack/react-query';
export default function useGetPost() {
    const result = useQuery({
      queryKey : ["post"] ,
      queryFn : async () => 
      {
        const res = await axios.get(`${BASE_URL}/posts`)
        return  res.data
      }
      
    })
    
   
      return {result}
  
}
