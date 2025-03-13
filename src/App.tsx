import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home.page";
import { PhotoDetail } from "./pages/photo-detail.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:id" element={<PhotoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
