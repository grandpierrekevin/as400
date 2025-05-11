import { useRoutes } from "react-router-dom";
import routes from "~react-pages";

export default function App() {
  const element = useRoutes(routes);

  return element
}
