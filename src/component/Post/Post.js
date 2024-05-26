
import style from "../../assets/css/post.module.css";

import PostForm from "./PostForm";

import Create from "./Create";
import useGetPosts from "../../hook/useGetPosts";
export default function Post() {
  const {result} = useGetPosts()
  const post = result.data
  return (
    <div className="main">
       <div >
        <Create />
       <h2 className={style.title}> Post List </h2>
      <div className={style.Post}>
        {post && post.map((e) => <PostForm post={e} />)}
      </div>
       </div>
       
    </div>
  );
}
