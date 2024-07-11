import React from 'react';
import './Input.css';

function Input(props) {
  const tip = () => {
    let tipCalculate = props.billAmt * props.service;

    let listEntry = {
      name: props.custName,
      tipAmt: tipCalculate
    };
    let newList = [...props.list, listEntry]

    props.setCalculateTip(props.billAmt * props.service),
      props.setPrintCustName(true),
      props.setList(newList)
  }
  return (
    <div id="inputdiv">
      <p>Enter your bill amount</p>
      <input type="number" placeholder="Enter Amount" id="input1" onChange={(e) => { props.setBillAmt(e.target.value) }} />
      <hr />
      <label>How was the service</label>
      <select onChange={(e) => { props.setService(e.target.value) }}>
        <option>Choose...</option>
        <option value="0.2">Excellent (20%)</option>
        <option value="0.1">Moderate (10%)</option>
        <option value="0.05">Bad (5%)</option>
      </select>
      <input type="text" placeholder="Customer Name" id="input2" onChange={(e) => { props.setCustName(e.target.value), props.setPrintCustName(false) }} />
      <button onClick={tip}>Add Customer</button>

    </div>
  )
}

export default Input;