import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "../routes/Books.jsx";
import Add from "../routes/Add.jsx";
import Update from "../routes/Update.jsx";
import "./App.css";

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
    path: "/update/:id",
    element: <Update />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
