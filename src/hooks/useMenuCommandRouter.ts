import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RouteObject } from "react-router-dom";

export function useMenuCommandRouter(routes: RouteObject[]) {
  const navigate = useNavigate();

  return useCallback((cmd: string) => {
    const key = cmd.trim().toUpperCase();

    const numericIndex = parseInt(key);
    if (!isNaN(numericIndex) && numericIndex >= 1 && numericIndex <= routes.length) {
      const target = routes[numericIndex - 1].path;
      if (target) {
        navigate("/" + String(target).replace(/^\/+/, ""));
        return;
      }
    }

    const match = routes.find((r) => {
      const base = r.path?.split("/")[1] ?? "";
      return base.toUpperCase() === key;
    });

    if (match?.path) {
      navigate("/" + String(match.path).replace(/^\/+/, ""));
    } else {
      alert(`Commande non reconnue : ${key}`);
    }
  }, [navigate, routes]);
}
