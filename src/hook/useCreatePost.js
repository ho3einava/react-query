import axios from 'axios'
import BASE_URL from './BASE_URL'
import { useMutation} from '@tanstack/react-query'
export default function useCreatePost({form}) {
    console.log(form)
     useMutation({
        mutationKey : ["CreatePost"] ,
        mutationFn : async () => 
        {
           await axios.post(`${BASE_URL}/posts`,{
               title : form.title ,
               description : form.description,
               price : form.price
          })
        }
        
      })
      
    
  
}
