import Index from "./Page/Index";
import Header from "./component/Header";
import Post from "./component/Post/Post";
import PostId from "./component/Post/PostId";
import NotFound from "./component/NotFound";
import { BrowserRouter , Route , Routes } from "react-router-dom";
export default function App() {
         
   
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes >
        <Route path="/" element={<Index/>} />
        <Route path="/Post" element={<Post/>} />
        <Route path="/Post/:id" element={<PostId/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
      
      </div>
  )
}
