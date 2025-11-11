import { Routes, Route } from "react-router-dom";
import "./app.css";
import Details from "./views/Details";
import Products from "./views/Products";
import NotFound from "./views/NotFound";
import Home from "./views/Home";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
