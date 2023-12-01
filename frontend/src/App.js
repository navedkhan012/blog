import "./App.css";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
