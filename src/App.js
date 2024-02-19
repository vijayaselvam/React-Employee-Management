import logo from "./logo.svg";
import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div>
        <h1 className="main-header">Employee Management</h1>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/create" element={<Create />} />

            <Route path="/read" element={<Read />} />

            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
