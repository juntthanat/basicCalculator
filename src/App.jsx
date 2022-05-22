import "./App.css";
import React, { useState } from "react";
import { FiPlus, FiMinus, FiX, FiDivide } from "react-icons/fi";

function App() {
  const [numberString, setNumberString] = useState("");
  const [historyResult, setHistoryResult] = useState([]);

  function handleOnClickButton(e) {
    switch (e.currentTarget.id){
      case "button-0":
        setNumberString((prevVal) => prevVal + "0");
        return;
      case "button-1":
        setNumberString((prevVal) => prevVal + "1");
        return;
      case "button-2":
        setNumberString((prevVal) => prevVal + "2");
        return;
      case "button-3":
        setNumberString((prevVal) => prevVal + "3");
        return;
      case "button-4":
        setNumberString((prevVal) => prevVal + "4");
        return;
      case "button-5":
        setNumberString((prevVal) => prevVal + "5");
        return;
      case "button-6":
        setNumberString((prevVal) => prevVal + "6");
        return;
      case "button-7":
        setNumberString((prevVal) => prevVal + "7");
        return;
      case "button-8":
        setNumberString((prevVal) => prevVal + "8");
        return;
      case "button-9":
        setNumberString((prevVal) => prevVal + "9");
        return;
      case "button-dot":
        setNumberString((prevVal) => prevVal + ".");
        return;
      case "button-clear":
        setNumberString("")
        return;
      case "button-addition":
        setNumberString((prevVal) => prevVal + "+");
        return;
      case "button-subtract":
        setNumberString((prevVal) => prevVal + "-");
        return;
      case "button-multiply":
        setNumberString((prevVal) => prevVal + "*");
        return;
      case "button-divide":
        setNumberString((prevVal) => prevVal + "/");
        return;
      case "button-equal":
        setNumberString(eval(numberString))
        historyResultHandler();
        return;
    }
  }
  function historyResultHandler(e){
    if(historyResult.length > 3){
      historyResult.pop()
    }
    setHistoryResult([eval(numberString), ...historyResult]);
  }
  return (
    <div className="App">
      <div className="center">
        <div className="center-divider"></div>
        <div className="left-container">
          <div className="left-element">
            <div className="display-container">
              <div className="display-result">
                <div id="result">{numberString}</div>
              </div>
            </div>
            <div className="button-container">
              <div className="button-operation">
                <button id="button-addition" onClick={handleOnClickButton}>
                  <FiPlus />
                </button>
                <button id="button-subtract" onClick={handleOnClickButton}>
                  <FiMinus />
                </button>
                <button id="button-multiply" onClick={handleOnClickButton}>
                  <FiX />
                </button>
                <button id="button-divide" onClick={handleOnClickButton}>
                  <FiDivide />
                </button>
              </div>
              <div className="button-one-to-nine">
                <button id="button-7" onClick={handleOnClickButton}>
                  7
                </button>
                <button id="button-8" onClick={handleOnClickButton}>
                  8
                </button>
                <button id="button-9" onClick={handleOnClickButton}>
                  9
                </button>
                <button id="button-4" onClick={handleOnClickButton}>
                  4
                </button>
                <button id="button-5" onClick={handleOnClickButton}>
                  5
                </button>
                <button id="button-6" onClick={handleOnClickButton}>
                  6
                </button>
                <button id="button-1" onClick={handleOnClickButton}>
                  1
                </button>
                <button id="button-2" onClick={handleOnClickButton}>
                  2
                </button>
                <button id="button-3" onClick={handleOnClickButton}>
                  3
                </button>
              </div>
              <div className="button-zero-point">
                <button id="button-0" onClick={handleOnClickButton}>
                  0
                </button>
                <button id="button-dot" onClick={handleOnClickButton}>
                  .
                </button>
              </div>
              <div className="button-clear-equal">
                <button id="button-clear" onClick={handleOnClickButton}>
                  AC
                </button>
                <button id="button-equal" onClick={handleOnClickButton}>
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="display-history-result-container"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
