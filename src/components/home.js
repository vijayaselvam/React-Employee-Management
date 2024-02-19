import Create from "./create";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div >
      <h1 className="main-header">Employee Management</h1>
      <div>
        <Create />
      </div>
    </div>
  );
}
