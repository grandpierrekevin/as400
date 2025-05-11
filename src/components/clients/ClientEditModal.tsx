import { useState } from "react";
import { Client } from "@/types/client"; 

type Props = {
  client: Client;
  onClose: () => void;
};

export default function ClientEditModal({ client, onClose }: Props) {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [website, setWebsite] = useState(client.website);
  const [street, setStreet] = useState(client.address?.street || "");
  const [suite, setSuite] = useState(client.address?.suite || "");
  const [city, setCity] = useState(client.address?.city || "");
  const [zipcode, setZipcode] = useState(client.address?.zipcode || "");
  const [tel, setTel] = useState(client.phone || "");

  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setMessage(`✅ Modifications enregistrées pour ${name}`);
    setTimeout(() => {
      setMessage("");
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-black border border-green-500 p-4 w-[36rem] text-green-500 font-mono">
        <h2 className="text-lg font-bold mb-2">✏️ Modifier le client : {client.name}</h2>

        <div className="grid grid-cols-2 gap-4 mb-2">
          <div>
            <label className="block text-sm">Nom :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm">Email :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm">Site Web :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm">Téléphone :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </div>
        </div>

        <hr className="border-green-500 my-3" />

        <h3 className="text-md font-bold mb-2">📬 Adresse</h3>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm">Rue :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm">Complément :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={suite}
              onChange={(e) => setSuite(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm">Ville :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm">Code postal :</label>
            <input
              className="w-full bg-black border-b border-green-500 outline-none"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
        </div>

        {message && <p className="text-green-400 text-sm mb-2">{message}</p>}

        <div className="text-right space-x-2">
          <button
            onClick={onClose}
            className="border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black"
          >
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            className="border border-green-500 px-3 py-1 hover:bg-green-500 hover:text-black"
          >
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}
