import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useJsonPlaceholderResource } from "@/hooks/useJsonPlaceholderResource";
import { usePagination } from "@/hooks/usePagination";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import { usePostCommand } from "@/hooks/usePostCommand";
import FooterNavigation from "@/components/FooterNavigation";
import PostTable from "@/components/jsonplaceholder/PostTable";

export default function PostsPage() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: posts = [], isLoading } = useJsonPlaceholderResource("posts");
  const {
    page,
    paginated,
    totalPages,
    nextPage,
    prevPage,
    resetPage,
  } = usePagination(posts, 10);
  const [message, setMessage] = useState("");

  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      setMessage(`✅ Post ${id} supprimé`);
      setTimeout(() => setMessage(""), 2000);
    } catch {
      setMessage("❌ Erreur lors de la suppression");
    }
  };

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: resetPage,
    onNextPage: nextPage,
    onPrevPage: prevPage,
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 text-sm flex flex-col">
      <h1 className="text-lg font-bold mb-2">Liste des posts</h1>

      {isLoading ? (
        <p className="italic">Chargement...</p>
      ) : (
        <PostTable
          posts={paginated}
          onAction={(id, action) => {
    if (action === "edit") navigate(`/jsonplaceholder/posts/${id}`);
    if (action === "delete") handleDelete(id);
  }}
/>
      )}

      <div className="text-xs italic mb-2">
        Tapez <strong>2</strong> pour modifier ou <strong>4</strong> pour supprimer.
      </div>

      {message && <div className="text-green-400 text-xs mb-2">{message}</div>}

      <FooterNavigation />
    </div>
  );
}
