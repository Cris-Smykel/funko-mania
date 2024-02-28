import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
