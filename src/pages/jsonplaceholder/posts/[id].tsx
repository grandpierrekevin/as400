import { useNavigate, useParams } from "react-router-dom";
import { usePostDetail } from "@/hooks/usePostDetail";
import { useEffect } from "react";

export default function PostEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    post,
    setPost,
    save,
    message,
    clearMessage,
  } = usePostDetail(id || "");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
        navigate("/jsonplaceholder/posts");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!post) return <div className="text-green-500 p-4">Chargement...</div>;

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4">
      <h1 className="text-lg font-bold mb-4">✏️ Modifier le post {id}</h1>

      <label className="block text-sm mb-2">
        Titre :
        <input
          className="w-full bg-black border-b border-green-500 text-green-500 outline-none"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
      </label>

      <label className="block text-sm mb-2">
        Contenu :
        <textarea
          className="w-full bg-black border-b border-green-500 text-green-500 outline-none h-40"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
      </label>

      <button
        onClick={save}
        className="mt-4 border border-green-500 px-4 py-1 hover:bg-green-500 hover:text-black"
      >
        Sauvegarder
      </button>

      {message && <p className="text-green-400 mt-2">{message}</p>}
    </div>
  );
}
