import { Client } from "@/types/client";
import ClientEditModal from "@/components/clients/ClientEditModal";

type Props = {
  client: Client;
  action: "view" | "edit" | "delete";
  onClose: () => void;
};

export default function ClientActionModal({ client, action, onClose }: Props) {
  if (action === "edit") {
    return <ClientEditModal client={client} onClose={onClose} />;
  }

  return (
    <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-black border border-green-500 p-4 w-[30rem] shadow-xl z-50 text-green-500 font-mono">
      <h2 className="text-lg font-bold mb-2">
        {action === "delete" ? "🗑️ Supprimer le client" : "👁️ Détail du client"}
      </h2>

      <div className="text-sm space-y-1">
        <p><strong>ID :</strong> {client.id}</p>
        <p><strong>Nom :</strong> {client.name}</p>
        <p><strong>Email :</strong> {client.email}</p>
        <p><strong>Site :</strong> {client.website}</p>

        {client.address && (
          <>
            <hr className="my-2 border-green-500" />
            <p><strong>Adresse :</strong> {client.address.street}, {client.address.suite}</p>
            <p><strong>Ville :</strong> {client.address.city} ({client.address.zipcode})</p>
          </>
        )}

        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-3 py-1 border border-green-500 hover:bg-green-500 hover:text-black"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
