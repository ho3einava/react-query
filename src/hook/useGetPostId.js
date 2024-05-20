import axios from 'axios';
import  { useEffect, useState } from 'react'
import BASE_URL from './BASE_URL';

export default function useGetPostId(userId) {
  
  console.log(userId)
    const [post, setPost] = useState();
    useEffect(() => {
        const fetchPost = async () => {
          const response = await axios.get(`${BASE_URL}/${userId.id}`);
          setPost(response.data);
        };
        fetchPost();
      }, [userId]);
      return {post}
  
}
