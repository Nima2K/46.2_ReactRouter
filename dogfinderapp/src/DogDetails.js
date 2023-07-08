import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./DogDetails.css";
import Nav from "./Nav";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const navigate = useNavigate();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  // Redirect if dog not found
  useEffect(() => {
    if (!dog) {
      navigate("/dogs");
    }
  }, [dog, navigate]);

  if (dog) {
    return (
      <>
        <Nav dogs={dogs} />
        <div className="DogDetails">
          <img src={dog.src} />
          <h1>{dog.name}</h1>
          <h3>{dog.age} years old</h3>
          <ul>
            {dog.facts.map((fact) => (
              <li key={dog.facts.indexOf(fact)}>{fact}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
  return null;
}

export default DogDetails;
