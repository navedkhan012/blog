import "./App.css";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/register/RegisterPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
