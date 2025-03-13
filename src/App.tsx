import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { HomePage } from "./pages/home.page";
import { PhotoDetailPage } from "./pages/photo-detail.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/photo/:id" element={<PhotoDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
