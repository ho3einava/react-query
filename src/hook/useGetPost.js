import axios from 'axios';
import  { useEffect, useState } from 'react'
import BASE_URL from './BASE_URL';
export default function useGetPost() {
    const [post, setPost] = useState();
    useEffect(() => {
        const fetchPost = async () => {
          const response = await axios.get(BASE_URL);
    
          setPost(response.data);
        };
        fetchPost();
      }, []);
      return {post}
  
}
