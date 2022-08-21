import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Pictures from "./pages/Pictures";
import PortPage01 from "./pages/PortPage01";
import PortPage02 from "./pages/PortPage02";
import PortPage03 from "./pages/PortPage03";

function App() {
  return (
    <BrowserRouter basename="/weida">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/pictures" exact element={<Pictures/>}/>
        <Route path="/portpage01" exact element={<PortPage01/>}/>
        <Route path="/portpage02" exact element={<PortPage02/>}/>
        <Route path="/portpage03" exact element={<PortPage03/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
