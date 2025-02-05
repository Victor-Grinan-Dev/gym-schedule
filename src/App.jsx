import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

//pages
import Layout from './layout/Layout';
import NotFound from './pages/notFound/NotFound';
import LandingPage from "./pages/landingPage/LandingPage";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
