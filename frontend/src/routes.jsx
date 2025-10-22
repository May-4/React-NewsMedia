import { Route, Routes } from "react-router-dom";
import App from "./App";
import { BlogForm } from "./screens/BlogForm";
import { BlogPost } from "./screens/BlogPost";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<BlogPost />} />
        <Route path="/create" element={<BlogForm />} />
        <Route path="/post" element={<BlogPost />} />
      </Route>
    </Routes>
  );
}
