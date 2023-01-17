import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="showCl-btnCl">
      <button className="btnCl expCl" onClick={inputHandler}>
        ^
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        (
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        )
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        √
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        x<sup>2</sup>
      </button>
      <button className="btnCl clr" onClick={clearInput}>
        AC
      </button>
      <button className="btnCl clr" onClick={backspace}>
        ⌫
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        log
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        ÷
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        %
      </button>
      <button className="btnCl" onClick={inputHandler}>
        7
      </button>
      <button className="btnCl" onClick={inputHandler}>
        8
      </button>
      <button className="btnCl" onClick={inputHandler}>
        9
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        x
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className="btnCl" onClick={inputHandler}>
        4
      </button>
      <button className="btnCl" onClick={inputHandler}>
        5
      </button>
      <button className="btnCl" onClick={inputHandler}>
        6
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        -
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className="btnCl" onClick={inputHandler}>
        1
      </button>
      <button className="btnCl" onClick={inputHandler}>
        2
      </button>
      <button className="btnCl" onClick={inputHandler}>
        3
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        +
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        !
      </button>
      <button className="btnCl expCl" onClick={changePlusMinus}>
        ±
      </button>
      <button className="btnCl" onClick={inputHandler}>
        0
      </button>
      <button className="btnCl expCl" onClick={inputHandler}>
        .
      </button>
      <button className="btnCl expCl equalCl" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;