import { RouteObject } from "react-router-dom";

type Props = {
  routes: RouteObject[];
};

export default function HomeMenuOptions({ routes }: Props) {
  return (
    <ul className="mt-10 space-y-1 pl-4">
      {routes.map((route, index) => {
        const segments = route.path?.split("/") ?? [];
        const label = segments[1] || "";
        return (
          <li key={`${index}-${route.path}`}>
            {index + 1}. {label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()} → {route.path}
          </li>
        );
      })}
    </ul>
  );
}
