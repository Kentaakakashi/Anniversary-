import { Routes, Route, Navigate } from "react-router-dom";
import Anniversary from "./pages/Anniversary";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Routes>
        <Route path="/" element={<Anniversary />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
