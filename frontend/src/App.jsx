import "./App.css";
import { useState } from "react";

function App() {
  const [hidden, setHidden] = useState(false)

  const toggleVis = () => {
    setHidden(!hidden)
  }

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h2>Decks</h2>
        </div>
        <div className="window">
          <div className="bg-black">
            <h2>Collection</h2>
          </div>
          <div className="search">
            <form>
              <label>Find Cards</label>
              <select>
                <option>Type</option>
                <option>Color</option>
                <option>Type</option>
                <option>Type</option>
              </select>
              <input></input>
            </form>
          </div>
          <div className="cardDisplay">
            <div>
              <h3>Creatures</h3>
              <div className="card" onClick={toggleVis}>Card 1</div>
              <div className="modal" onClick={toggleVis} style={{ "display": hidden ? "block":"none"}}>
                <p className="modal-content">
                Some text in the Modal..
                </p>
              </div>
            </div>
            <div>
              <h3>Instants</h3>
                <div className="card">Card 1</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
