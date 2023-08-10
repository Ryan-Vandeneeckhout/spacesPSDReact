import "../src/sass/style.scss";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { UpperNavigation } from "./components/navigation/upperNavigation.jsx";
import { useInView } from "react-intersection-observer";

function App() {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.1,
  });

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <UpperNavigation NavChangeStyle={contentItemInView} />
        </header>
        <Routes>
          <Route
            extact
            path="/"
            element={<Main NavChangeStyleSectionsInView={contentItemView} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
