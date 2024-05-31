import "./App.css";

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
          <div className="cardDisplay">
            <div>
              <h3>Creatures</h3>
              { }
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
