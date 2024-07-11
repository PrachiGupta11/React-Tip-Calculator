import React from 'react';
import './Output.css';

function Output(props) {
  
  const addTotalTip_Cust = () => {
     props.setTotalTip(props.totalTip + props.calculateTip),
       props.setTotalCust(props.list.length)
  }

  return (
    <div>
      <h2 id="heading">Customer List</h2>
      <hr id="line" />
      <ul>
        {
          props.list.map((ele,index)=>(
              <li key={index}>{ele.name} offering a tip of {ele.tipAmt} rupee.</li> 
          ))
        }
      </ul>
      <div className="btn">
        <button id="calculateTip" onClick={addTotalTip_Cust}>Calculate Tip & Customer</button>
      </div>
      <table>
        <tr>
          <th>Total Customer</th>
          <th>Tip</th>
        </tr>
        <tr>
          <td>{props.totalCust}</td>
          <td>{props.totalTip}</td>
        </tr>
      </table>
    </div>
  )
}

export default Output;