export type Commande = {
  id: string;
  client: string;
  montant: number;
  statut: "En cours" | "Envoyée" | "Annulée";
};

type CommandeTableProps = {
  commandes: Commande[];
};

export default function CommandeTable({ commandes }: CommandeTableProps) {
  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className="border-b border-green-500">
          <th className="text-left p-2">N°</th>
          <th className="text-left p-2">Client</th>
          <th className="text-left p-2">Montant</th>
          <th className="text-left p-2">Statut</th>
        </tr>
      </thead>
      <tbody>
        {commandes.length > 0 ? (
          commandes.map((cmd) => (
            <tr key={cmd.id} className="hover:bg-green-800/20">
              <td className="p-2">{cmd.id}</td>
              <td className="p-2">{cmd.client}</td>
              <td className="p-2">{cmd.montant.toFixed(2)} €</td>
              <td className="p-2">{cmd.statut}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="p-2 italic text-gray-400">
              Aucune commande trouvée.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
