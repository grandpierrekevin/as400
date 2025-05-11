import { useNavigate } from "react-router-dom";

export function useHomeCommandRouter() {
  const navigate = useNavigate();

  const execute = (cmd: string) => {
    const command = cmd.trim().toUpperCase();
    switch (command) {
      case "1":
      case "CLIENTS":
        navigate("/clients");
        break;
      case "2":
      case "COMMANDES":
        navigate("/commandes");
        break;
      case "3":
      case "SNAKE":
        navigate("/snake");
        break;
      case "4":
      case "MEMORY":
        navigate("/memory");
        break;
      case "5":
      case "BREAK":
        navigate("/breakcode");
        break;
      case "6":
      case "WRKACTJOB":
        navigate("/wrkactjob");
        break;
      case "7":
      case "STRPDM":
        navigate("/strpdm");
        break;
      default:
        alert(`Commande non reconnue : ${command}`);
    }
  };

  return { execute };
}
