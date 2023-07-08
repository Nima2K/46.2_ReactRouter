import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import "./App.css";

function App(props) {
  function Redirect() {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/dogs");
    }, [navigate]);
    return null;
  }
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/dogs/:name"
            element={<DogDetails dogs={props.dogs} />}
          />
          <Route exact path="/dogs" element={<DogList dogs={props.dogs} />} />

          <Route path="*" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "/images/whiskey.jpg",
      path: "/dogs/whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "/images/duke.jpg",
      path: "/dogs/duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "/images/perry.jpg",
      path: "/dogs/perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: "/images/tubby.jpg",
      path: "/dogs/tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
