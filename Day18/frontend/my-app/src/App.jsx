import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import ViewPage  from "./Pages/ViewPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { CartPage } from "./Pages/CartPage";
import { ProfilePage } from "./Pages/ProfilePage";
import { SignPage } from "./Pages/SignPage";
import { LoginPage } from "./Pages/LoginPage";
import { SearchPage } from "./Pages/SearchPage"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
