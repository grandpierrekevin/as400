import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "@/types/post";

export function usePostDetail(id: string | number) {
  const [post, setPost] = useState<Post | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost({
          title: res.data.title,
          body: res.data.body,
        });
      });
  }, [id]);

  const save = async () => {
    if (!post) return;

    await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post);
    setMessage("✅ Post modifié !");
  };

  const clearMessage = () => setMessage("");

  return { post, setPost, save, message, clearMessage };
}