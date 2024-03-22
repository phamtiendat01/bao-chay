import { createBrowserRouter } from "react-router-dom";
import App from "../App";
const routes = [
  {
    path: "/",
    element: <App />,
  },
];
const router = createBrowserRouter(routes, {
  basename: "/",
  future: {
    v7_normalizeFormMethod: true,
  },
});

export default router;
