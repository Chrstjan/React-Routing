import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { ConceptPage } from "./pages/ConceptPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import "./App.scss";
import { PageNotFound } from "./pages/PageNotFound";
import { LaundryPage } from "./pages/LaundryPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<LandingPage />}></Route>
            <Route path={"/laundry"} element={<LaundryPage />}></Route>
            <Route path={"/concepts"} element={<ConceptPage />}></Route>
            <Route path={"/about"} element={<AboutPage />}></Route>
            <Route path={"/contact"} element={<ContactPage />}></Route>
            <Route path={"/*"} element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
