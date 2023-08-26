import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "../routes/Books.jsx";
import Add from "../routes/Add.jsx";
import Update from "../routes/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
