import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [values, setValues] = useState({
    principal: '',
    rate: '',
    time: ''
  });

  const [result, setResult] = useState({
    simpleInterest: null,
    totalAmount: null
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const calculateInterest = () => {
    const principal = parseFloat(values.principal);
    const rate = parseFloat(values.rate);
    const time = parseFloat(values.time);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert('Please enter valid inputs.');
      return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    const totalAmount = principal + simpleInterest;

    setResult({
      simpleInterest: simpleInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2)
    });
  };

  return (
    <div className="container">
      <h1 className="title">Interest Calculator</h1>
      <div className="form-container">
        <input
          type="number"
          name="principal"
          placeholder="Principal Amount"
          value={values.principal}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="rate"
          placeholder="Interest Rate (%)"
          value={values.rate}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="time"
          placeholder="Time (Years)"
          value={values.time}
          onChange={handleChange}
          className="input"
        />
        <button onClick={calculateInterest} className="button">
          Calculate Interest
        </button>
      </div>
      {result.simpleInterest !== null && (
        <div className="result">
          <p>Simple Interest: ${result.simpleInterest}</p>
          <p>Total Amount: ${result.totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default App;


