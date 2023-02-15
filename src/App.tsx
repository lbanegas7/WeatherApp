import { Route } from "react-router";
import { Routes, Navigate } from "react-router-dom";
import { Weather } from "./pages/Weather";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

export default App;
