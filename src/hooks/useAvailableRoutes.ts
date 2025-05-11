import { useMemo } from "react";
import routes from "~react-pages";

const EXCLUDED = ["", "home", "login"];

export function useAvailableRoutes() {
  return useMemo(() => {
    return routes
      .filter((route) => {
        const cleaned =
          typeof route.path === "string"
            ? route.path.replace(/^\/+/, "").split("/")[0] ?? ""
            : "";
        return typeof route.path === "string" && !EXCLUDED.includes(cleaned);
      })
      .sort((a, b) => {
        const aPath = a.path?.toUpperCase() ?? "";
        const bPath = b.path?.toUpperCase() ?? "";
        return aPath.localeCompare(bPath);
      });
  }, []);
}
