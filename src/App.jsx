import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Views
import Root from "./views/Root";
import Home from "./views/Home";
import Contact from "./views/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home"} replace={true} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
