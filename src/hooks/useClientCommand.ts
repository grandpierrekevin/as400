import { NavigateFunction } from "react-router-dom";

type ActionType = "view" | "edit" | "delete" | null;

export function useClientCommand({
  clients,
  setSelected,
  navigate,
}: {
  clients: { id: number }[];
  setSelected: React.Dispatch<React.SetStateAction<{ id: number; action: ActionType }>>;
  navigate: NavigateFunction;
}) {
  return (cmd: string) => {
    const [opt, id] = cmd.trim().split(" ");
    const clientId = parseInt(id);
    const validId = clients.some((c) => c.id === clientId);

    if (opt === "2" && validId) setSelected({ id: clientId, action: "edit" });
    else if (opt === "4" && validId) setSelected({ id: clientId, action: "delete" });
    else if (opt === "5" && validId) setSelected({ id: clientId, action: "view" });
    else if (cmd.toUpperCase() === "HOME") navigate("/home");
    else alert(`Commande non reconnue ou client inexistant : ${cmd}`);
  };
}
