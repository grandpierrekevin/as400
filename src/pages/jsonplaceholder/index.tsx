import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAS400KeyboardNav } from "@/hooks/useAS400KeyboardNav";
import FooterNavigation from "@/components/FooterNavigation";

export default function JsonPlaceholderMenu() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const options = [
    { id: "1", label: "Posts", path: "/jsonplaceholder/posts" },
  ];

  useAS400KeyboardNav({
    onF3: () => navigate("/home"),
    onF12: () => inputRef.current?.focus(),
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, id: string, path: string) => {
    if (e.key === "Enter") {
      const value = (e.target as HTMLInputElement).value.trim();
      if (value === id) {
        navigate(path);
      } else {
        alert(`Option ${value} non reconnue`);
      }
      (e.target as HTMLInputElement).value = ""; 
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono text-sm flex flex-col justify-between p-4">
      <div>
        <h1 className="text-lg font-bold mb-4">📚 Menu JSONPlaceholder</h1>
        <p>Saisissez l’option devant la ligne :</p>

        <table className="mt-4">
          <tbody>
            {options.map((opt, i) => (
              <tr key={opt.id} className="h-6">
                <td className="pr-2 align-top">
                  <input
                    ref={i === 0 ? inputRef : undefined}
                    type="text"
                    maxLength={1}
                    className="w-4 bg-black border-b border-green-500 text-green-500 outline-none text-center"
                    onKeyDown={(e) => handleKeyDown(e, opt.id, opt.path)}
                  />
                </td>
                <td>
                  {opt.label}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <FooterNavigation />
    </div>
  );
}
