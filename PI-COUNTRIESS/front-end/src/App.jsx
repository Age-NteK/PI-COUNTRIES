import { Routes, Route } from "react-router-dom";
import Landing from "./components/Country/Landing/Landing";
import Home from "./components/Country/Home/Home";
import Detail from "./components/Country/Detail/Detail";
import DetailName from "./components/Country/DetailName/DetailName"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id_country" element={<Detail />} />
      <Route path="/detailname/:name" element={<DetailName />} />
    </Routes>
  );
}

export default App;
