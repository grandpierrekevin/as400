import { useState } from "react";

type Post = {
  id: number;
  title: string;
};

type Props = {
  posts: Post[];
  onAction: (id: number, action: "edit" | "delete") => void;
};

export default function PostTable({ posts, onAction }: Props) {
  const [options, setOptions] = useState<Record<number, string>>({});

  const handleInputChange = (id: number, value: string) => {
    const newValue = value.slice(-1); // force 1 caractère
    setOptions((prev) => ({ ...prev, [id]: newValue }));
    if (newValue === "2") onAction(id, "edit");
    if (newValue === "4") onAction(id, "delete");
  };

  return (
    <table className="table-auto border-collapse w-full mb-4">
      <thead>
        <tr className="border-b border-green-500">
          <th className="text-left p-2">Opt</th>
          <th className="text-left p-2">ID</th>
          <th className="text-left p-2">Titre</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id} className="hover:bg-green-800/20">
            <td className="p-2">
              <input
                value={options[post.id] || ""}
                onChange={(e) => handleInputChange(post.id, e.target.value)}
                maxLength={1}
                className="bg-black border-b border-green-500 text-green-500 w-6 outline-none"
              />
            </td>
            <td className="p-2">{post.id}</td>
            <td className="p-2">{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
