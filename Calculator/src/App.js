import React, { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState('');

  const display = (num) => {
    setOutput(output + num);
  };

  const calculate = () => {
    try {
      setOutput(eval(output).toString());
    } catch (err) {
      alert('Invalid');
    }
  };

  const clear = () => {
    setOutput('');
  };

  const del = () => {
    setOutput(output.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" placeholder="0" value={output} readOnly id="output-screen" />
        <button className="buttonHover" onClick={clear}>CL</button>
        <button className="buttonHover" onClick={del}>DEL</button>
        <button className="buttonHover" onClick={() => display('1')}>1</button>
        <button className="buttonHover" onClick={() => display('2')}>2</button>
        <button className="buttonHover" onClick={() => display('3')}>3</button>
        <button className="buttonHover" onClick={() => display('4')}>4</button>
        <button className="buttonHover" onClick={() => display('5')}>5</button>
        <button className="buttonHover" onClick={() => display('6')}>6</button>
        <button className="buttonHover" onClick={() => display('7')}>7</button>
        <button className="buttonHover" onClick={() => display('8')}>8</button>
        <button className="buttonHover" onClick={() => display('9')}>9</button>
        <button className="buttonHover" onClick={() => display('0')}>0</button>
        <button className="buttonHover" onClick={() => display('.')}>.</button>
        <button className="buttonHover" onClick={() => display('/')}>/</button>
        <button className="buttonHover" onClick={() => display('+')}>+</button>
        <button className="buttonHover" onClick={() => display('-')}>-</button>
        <button className="buttonHover" onClick={() => display('*')}>*</button>
        <button className="buttonHover" onClick={() => display('%')}>%</button>
        <button className="buttonHover" onClick={calculate} className="equal">=</button>
      </div>
    </div>
  );
}

export default App;
