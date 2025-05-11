import { NavigateFunction } from "react-router-dom";
import axios from "axios";

type UsePostCommandProps = {
  navigate: NavigateFunction;
  onDelete: (id: number) => void;
};

export function usePostCommand({ navigate, onDelete }: UsePostCommandProps) {
  return (input: string) => {
    const [cmd, idStr] = input.trim().split(" ");
    const id = parseInt(idStr, 10);
    if (cmd === "2" && !isNaN(id)) {
      navigate(`/jsonplaceholder/posts/${id}`);
    } else if (cmd === "4" && !isNaN(id)) {
      onDelete(id);
    } else {
      alert("Commande invalide. Utilisez 2 = Modifier ou 4 = Supprimer.");
    }
  };
}
