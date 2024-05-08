import { useEffect } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Desktop from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
    </Routes>
  );
}
export default App;
