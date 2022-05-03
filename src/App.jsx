import "./App.css";
import React, { useState } from "react";
import { FiPlus, FiMinus, FiX, FiDivide } from "react-icons/fi";

function App() {
  const [resultList, setResultList] = useState([]);
  const [currentSum, setCurrentSum] = useState(0);
  const [operation, setOperation] = useState(0);
  const [firstNumber, setFirstNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [useDot, setUseDot] = useState();
  const [isInOperation, setIsInOperation] = useState(false);

  const handleOnClickEqualButton = (result, displayCurrentSum) => {
    if (operation == 1) {
      result = currentSum + parseFloat(inputValue);
      setCurrentSum(result);
      setInputValue(result);
    } else if (operation == 2) {
      result = currentSum - parseFloat(inputValue);
      setCurrentSum(result);
      setInputValue(result);
    } else if (operation == 3) {
      result = currentSum * parseFloat(inputValue);
      setCurrentSum(result);
      setInputValue(result);
    } else if (operation == 4) {
      result = currentSum / parseFloat(inputValue);
      setCurrentSum(result);
      setInputValue(result);
    }
    displayCurrentSum.style.display = "none";
  };

  function handleOnClickButton(e) {
    let displayCurrentSum = document.querySelector("#sum");
    let result = 0;
    displayCurrentSum.style.display = "none";
    switch (e.currentTarget.id) {
      case "button-0":
        setInputValue((prevVal) => prevVal + "0");
        return;
      case "button-1":
        setInputValue((prevVal) => prevVal + "1");
        return;
      case "button-2":
        setInputValue((prevVal) => prevVal + "2");
        return;
      case "button-3":
        setInputValue((prevVal) => prevVal + "3");
        return;
      case "button-4":
        setInputValue((prevVal) => prevVal + "4");
        return;
      case "button-5":
        setInputValue((prevVal) => prevVal + "5");
        return;
      case "button-6":
        setInputValue((prevVal) => prevVal + "6");
        return;
      case "button-7":
        setInputValue((prevVal) => prevVal + "7");
        return;
      case "button-8":
        setInputValue((prevVal) => prevVal + "8");
        return;
      case "button-9":
        setInputValue((prevVal) => prevVal + "9");
        return;
      case "button-dot":
        setInputValue((prevVal) => prevVal + ".");
        return;
      case "button-clear":
        setInputValue("");
        setCurrentSum(0);
        setFirstNumber(0);
        displayCurrentSum.style.display = "block";
        return;
      case "button-addition":
        setOperation(1);
        setIsInOperation(true);
        if (firstNumber == 0) {
          setCurrentSum(parseFloat(inputValue));
          setInputValue("");
          displayCurrentSum.style.display = "block";
          setFirstNumber(1);
        } else {
          handleOnClickEqualButton(result, displayCurrentSum);
          setInputValue("");
          displayCurrentSum.style.display = "block";
          return;
        }

        return;
      case "button-subtract":
        setOperation(2);
        setIsInOperation(true);
        if (firstNumber == 0) {
          setCurrentSum(parseFloat(inputValue));
          setInputValue("");
          displayCurrentSum.style.display = "block";
          setFirstNumber(1);
        } else {
          handleOnClickEqualButton(result, displayCurrentSum);
          setInputValue("");
          displayCurrentSum.style.display = "block";
          return;
        }
        return;

      case "button-multiply":
        setOperation(3);
        setIsInOperation(true);
        if (firstNumber == 0) {
          setCurrentSum(parseFloat(inputValue));
          setInputValue("");
          displayCurrentSum.style.display = "block";
          setFirstNumber(1);
        } else {
          handleOnClickEqualButton(result, displayCurrentSum);
          setInputValue("");
          displayCurrentSum.style.display = "block";
          return;
        }
        return;
      case "button-divide":
        setOperation(4);
        setIsInOperation(true);
        if (firstNumber == 0) {
          setCurrentSum(parseFloat(inputValue));
          setInputValue("");
          displayCurrentSum.style.display = "block";
          setFirstNumber(1);
        } else {
          handleOnClickEqualButton(result, displayCurrentSum);
          setInputValue("");
          displayCurrentSum.style.display = "block";
          return;
        }
        return;
      case "button-equal":
        console.log(inputValue);
        console.log(currentSum);
        handleOnClickEqualButton(result, displayCurrentSum);
    }
  }

  return (
    <div className="App">
      <div className="center">
        <div className="center-divider"></div>
        <div className="left-container">
          <div className="left-element">
            <div className="display-container">
              <div className="display-result">
                <div id="result">{inputValue}</div>
                <div id="sum">{currentSum}</div>
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
      </div>
    </div>
  );
}

export default App;
