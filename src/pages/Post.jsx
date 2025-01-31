import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import HomePostCard from "../components/HomePostCard";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import { firestore } from "../firebase/config";


// Main post function
// This is a functional component for displaying a single post.
// It retrieves the post data from firestore using the post id. If the post is not found, it displays a 'not found' message. Otherwise, it renders the post data in the HomePostCard component.
const Post = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const postId = params.id;
  useEffect(() => {
    setLoading(true);
    const getPost = async () => {
      const res = await getDoc(doc(firestore, `posts/${postId}`));
      // console.log();
      if (res.data()) {
        setPost({ id: res.id, ...res.data() });     // add post data to firestore
        setLoading(false);
      } else {
        setLoading(false);
        setPost(null);
      }
    };
    getPost();
  }, [postId]);
  return (
    <div>
      <Header />
      <div className="mt-14 mx-auto h-screen max-w-4xl p-1">
        {loading ? (
          <Loading />
        ) : (
          <>{post ? <HomePostCard post={post} /> : <NotFound />}</>
        )}
      </div>
    </div>
  );
};

export default Post;
