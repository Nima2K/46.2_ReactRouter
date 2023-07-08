import Nav from "./Nav";
import "./DogList.css";
function DogList({ dogs }) {
  return (
    <>
      <Nav dogs={dogs} />
      <div className="DogList">Welcome! Checkout our dogs</div>
    </>
  );
}

export default DogList;
