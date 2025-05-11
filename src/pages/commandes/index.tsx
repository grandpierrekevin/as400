import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePagination } from "@/hooks/usePagination";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import PaginationInfo from "@/components/clients/PaginationInfo";
import CommandLineInput from "@/components/clients/CommandLineInput";
import CommandeTable from "@/components/commandes/CommandeTable";
import FooterNavigation from "@/components/FooterNavigation";

export type Commande = {
  id: string;
  client: string;
  montant: number;
  statut: "En cours" | "Envoyée" | "Annulée";
};

const COMMANDES: Commande[] = Array.from({ length: 30 }, (_, i) => ({
  id: `CMD${(i + 1).toString().padStart(3, "0")}`,
  client: `Client ${i + 1}`,
  montant: Math.round(Math.random() * 300),
  statut: ["En cours", "Envoyée", "Annulée"][i % 3] as Commande["statut"],
}));

export default function CommandesPage() {
  const navigate = useNavigate();
  const [command, setCommand] = useState("");

  const {
    page,
    totalPages,
    paginated,
    nextPage,
    prevPage,
    resetPage,
  } = usePagination(COMMANDES, 10);

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: resetPage,
    onNextPage: nextPage,
    onPrevPage: prevPage,
  });

  const handleCommand = (cmd: string) => {
    const c = cmd.trim().toUpperCase();
    switch (c) {
      case "1":
      case "CLIENTS":
        navigate("/clients");
        break;
      case "2":
      case "HOME":
        navigate("/home");
        break;
      default:
        alert(`Commande non reconnue : ${cmd}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 text-sm flex flex-col justify-between">
      <div className="border-b border-green-500 pb-1 mb-4 flex justify-between">
        <span>F3=Retour menu</span>
        <span>F12=Page 1</span>
        <span>+/- = Page suivante / précédente</span>
      </div>

      <div className="flex-1">
        <h1 className="text-xl font-bold mb-4">Consultation des commandes</h1>

        <CommandeTable commandes={paginated} />

        <PaginationInfo currentPage={page} pageSize={10} totalItems={COMMANDES.length} />
      </div>

      <CommandLineInput
        value={command}
        onChange={setCommand}
        onSubmit={handleCommand}
      />
      <FooterNavigation />
    </div>
  );
}
