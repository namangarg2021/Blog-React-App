import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import BlogDetails from "./pages/BlogDetails";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import Root from "./pages/Root";
import NoPage from "./pages/NoPage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/blog-details/:id", element: <BlogDetails /> },
      { path: "/add-blog", element: <AddBlog /> },
      { path: "/edit-blog/:id", element: <EditBlog /> },
      { path: "*", element: <NoPage /> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
