import "./App.css";
// feather icons for the symbols

function App() {
  return (
    <div className="App">
      <div className="center">
        <div className="center-divider"></div>
        <div className="left-container">
          <div className="left-element">
            <div className="button-container">
              <div className="button-symbol">
                <button className="button">+</button>
                <button className="button">-</button>
                <button className="button">x</button>
                <button className="button">/</button>
              </div>
              <div className="button-one-to-nine">
                <button className="button">1</button>
                <button className="button">2</button>
                <button className="button">3</button>
                <button className="button">4</button>
                <button className="button">5</button>
                <button className="button">6</button>
                <button className="button">7</button>
                <button className="button">8</button>
                <button className="button">9</button>
              </div>
              <div className="button-zero-point">
                <button className="button">0</button>
                <button className="button">.</button>
              </div>
              <div className="button-ans-equal">
                <button className="button">Ans</button>
                <button className="button">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
