import { useState } from "react";

export type Client = {
  id: number;
  name: string;
  email: string;
  website: string;
  adress: string;
};

type Props = {
  clients: Client[];
  onAction?: (id: number, action: "view" | "edit" | "delete") => void;
};

export const ClientTable: React.FC<Props> = ({ clients, onAction }) => {
  const [options, setOptions] = useState<Record<number, string>>({});

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, clientId: number) => {
    if (e.key === "Enter") {
      const val = options[clientId]?.trim();
      if (!val) return;
      switch (val) {
        case "2":
          onAction?.(clientId, "edit");
          break;
        case "4":
          onAction?.(clientId, "delete");
          break;
        case "5":
          onAction?.(clientId, "view");
          break;
        default:
          alert(`Option inconnue : ${val}`);
      }
      setOptions((prev) => ({ ...prev, [clientId]: "" }));
    }
  };

  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className="border-b border-green-500">
          <th className="text-left p-2">Opt</th>
          <th className="text-left p-2">ID</th>
          <th className="text-left p-2">Nom</th>
          <th className="text-left p-2">Email</th>
          <th className="text-left p-2">Site</th>
        </tr>
      </thead>
      <tbody>
        {clients.length > 0 ? (
          clients.map((client) => (
            <tr key={client.id} className="hover:bg-green-800/20">
              <td className="p-2">
                <input
                  className="bg-black border-b border-green-500 text-green-500 w-10 text-center outline-none"
                  value={options[client.id] || ""}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, [client.id]: e.target.value }))
                  }
                  onKeyDown={(e) => handleKeyDown(e, client.id)}
                />
              </td>
              <td className="p-2">{client.id}</td>
              <td className="p-2">{client.name}</td>
              <td className="p-2">{client.email}</td>
              <td className="p-2">{client.website}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="p-2 italic text-gray-400">
              Aucun client trouvé.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ClientTable;
