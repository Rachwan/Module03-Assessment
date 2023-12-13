import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import SingleArticle from "../pages/SingleArticle/SingleArticle";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Routes that have the header and the sidebar */}
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/article" element={<SingleArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
