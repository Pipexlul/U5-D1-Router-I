import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Views
import Root from "./views/Root";

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
        element: <h1>Home</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
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
