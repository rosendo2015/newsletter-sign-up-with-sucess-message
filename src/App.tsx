import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}