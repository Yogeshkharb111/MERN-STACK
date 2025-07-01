import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { SearchPage } from "./Pages/SearchPage";
import { ViewPage } from "./Pages/ViewPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { useState } from "react";
import { SearchResults } from "./Components/SearchResults";
import { ProductResultCard } from "./Components/ProductResultCard";


const App = () => {
  const [text, setText] = useState("");
  const handleSearchText = (newVal) => { 
    setText(newVal);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage text={text} handleSearchText={handleSearchText} />} />
        <Route path="/search" element={<SearchPage text={text} handleSearchText={handleSearchText} />} />
        <Route path="/view" element={<ViewPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
