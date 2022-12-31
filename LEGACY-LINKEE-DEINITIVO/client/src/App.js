import "./sass/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Application from "./pages/Application";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Application />} />
          <Route path="/section/:sectionId" element={<Application />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
