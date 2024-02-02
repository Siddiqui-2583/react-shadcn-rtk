import { routeGenerator } from "@/utils/routesGenerator";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { designKitPaths } from "./design-kit.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/design-kit",
    element: <App />,
    children: routeGenerator(designKitPaths),
  },
]);

export default router;
