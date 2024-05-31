import "./App.css";
import CardContainer from "./components/CardContainer";

function App() {
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
          < CardContainer />
        </div>
      </div>
    </>
  );
}

export default App;
