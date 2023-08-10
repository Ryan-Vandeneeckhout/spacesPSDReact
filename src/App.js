import "../src/sass/style.scss";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { Overlay } from "./components/overlay/overlay";
import { UpperNavigation } from "./components/navigation/upperNavigation.jsx";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function App() {
  const [contentItemView, contentItemInView] = useInView({
    threshold: 0.1,
  });

  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <UpperNavigation
            NavChangeStyle={contentItemInView}
            setShowSideMenu={setShowSideMenu}
            showSideMenu={showSideMenu}
          />
        </header>
        <Routes>
          <Route
            extact
            path="/"
            element={<Main NavChangeStyleSectionsInView={contentItemView} />}
          />
        </Routes>
        <Overlay
          setShowSideMenu={setShowSideMenu}
          showSideMenu={showSideMenu}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
