import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import ColorForm from "./ColorForm";
import Header from "./Header";
import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [colors, setColors] = useState([
    { name: "green", hex: "#00a86b" },
    { name: "yellow", hex: "#ffbe0a" },
  ]);
  const [bgColor, setBGColor] = useState("white");

  return (
    <BrowserRouter>
      <div
        style={{ backgroundColor: bgColor, height: "100vh", padding: "0px" }}
      >
        <Header />
        <div className="bottom">
          <Routes>
            <Route
              exact
              path="/colors"
              element={<ColorList colors={colors} setBGColor={setBGColor} />}
            />
            <Route
              path="/colors/new"
              element={<ColorForm colors={colors} setColors={setColors} />}
            />
            <Route
              exact
              path="/colors/:color"
              element={<Color colors={colors} setBGColor={setBGColor} />}
            />
            <Route
              path="*"
              element={<ColorList colors={colors} setBGColor={setBGColor} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
