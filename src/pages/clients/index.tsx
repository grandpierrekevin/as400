import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import { useClients } from "@/hooks/useClients";
import ClientSearchInput from "@/components/clients/ClientSearchInput";
import ClientTable from "@/components/clients/ClientTable";
import ClientActionModal from "@/components/clients/ClientActionModal";
import FooterNavigation from "@/components/FooterNavigation";

export default function ClientsPage() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<{
    id: number;
    action: "view" | "edit" | "delete" | null;
  }>({ id: 0, action: null });

  const { clients, isLoading } = useClients();

  const filteredClients = clients.filter((client: { name: string }) =>
    client.name.toLowerCase().includes(search.toLowerCase())
  );

  const currentClient = clients.find((c: { id: number }) => c.id === selected.id);

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: () => {
      setSearch("");
      inputRef.current?.focus();
    },
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 text-sm flex flex-col">
      <h1 className="text-lg font-bold mb-4">Gestion des clients (API)</h1>

      <ClientSearchInput value={search} onChange={setSearch} />

      <div className="text-xs italic mb-2">
        Utilisez <strong>2</strong> pour modifier, <strong>4</strong> pour supprimer, <strong>5</strong> pour afficher
      </div>

      {isLoading ? (
        <p className="italic">Chargement...</p>
      ) : (
        <ClientTable
          clients={filteredClients}
          onAction={(id, action) => setSelected({ id, action })}
        />
      )}

      <FooterNavigation />

      {selected.action && currentClient && (
        <ClientActionModal
          client={currentClient}
          action={selected.action}
          onClose={() => setSelected({ id: 0, action: null })}
        />
      )}
    </div>
  );
}
