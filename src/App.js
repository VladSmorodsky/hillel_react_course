import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";
import {Popular} from "./pages/Popular";
import {Battle} from "./pages/Battle";
import {Navigation} from "./components/Navigation";
import {BattleResult} from "./pages/BattleResult";

const App = () =>{
  return (
    <div className="container">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/popular'} element={<Popular />} />
          <Route path={'/battle'} element={<Battle />} />
          <Route path={'/battle/result'} element={<BattleResult />} />

          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
