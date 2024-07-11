import React, { useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Input from './Component/Input';
import Output from './Component/Output';

function App() {
  const [billAmt, setBillAmt] = React.useState(0);      //bill Amount
  const [service, setService] = React.useState("");    // service feedback
  const [custName, setCustName] =React.useState("");    // customer name
  
  const [calculateTip, setCalculateTip] = React.useState(0);  
  // calculation of tip
  
  const [printCustName, setPrintCustName] = React.useState(false); 
  // print customer name from input
  
  const [totalTip, setTotalTip] = React.useState(0);   // total tip received
  
  const [totalCust, setTotalCust] = React.useState(0);   // count total customers who gave tip
  
  const [list, setList] = React.useState([]);   // list of customers name and tip received
  
 
  return (
    <div>
      <Header />
      <Input setBillAmt={setBillAmt} 
        billAmt={billAmt} 
        setService={setService}
        custName={custName} 
        setCustName={setCustName}
        service={service}
        setCalculateTip={setCalculateTip} 
        printCustName={printCustName} 
        setPrintCustName={setPrintCustName}
        list={list} 
        setList={setList} 
        />

      <Output 
        custName={custName}
        calculateTip={calculateTip}
        totalTip={totalTip} 
        setTotalTip={setTotalTip}
        totalCust={totalCust} 
        setTotalCust={setTotalCust}
        printCustName={printCustName}
        list={list}
        setList={setList}
        />
      <Footer />
    </div>
  );
}

export default App;












// import  { useState } from 'react';
// import './App.css';

// function tipcal () {
//   const [billAmt, setBillAmt] = useState('');
//   const [service, setService] = useState('');
//   const [custName, setCustName] = useState('');
//   const [totalTip, setTotalTip] = useState(0);
//   const [customers, setCustomers] = useState([]);

//   const caltip = (amount,service) => {
//     let tip = 0;
//     if(service === 'excellent'){
//       tip = amount * 0.20;
//     }
//     else if(service === 'good'){
//       tip = amount * 0.15;
//     }
//     else if(service === 'medium'){
//       tip = amount * 0.10;
//     }
//     else if(service === 'bad'){
//       tip = amount * 0.05;
//     }
//     return tip;
//   }
  


// const addcustomer = () => {
//   const tipAmount = caltip(billAmt,service);
//   const customer = {name : custname,tip:tipAmount};
//   setCustomers([...customers,customer]);
//   setTotalTip(totalTip + tipAmount);

//   setBillAmt('');
//   setCustName('');
// };

// return (
//   <div>
//     <h1>Tip Calculator</h1>

//     <label>
//     Bill Amount:
//     <input type = "number" value={billAmt} onChange={(e) => setBillAmt(e.target.value)} />
//     </label>

//     <label>
//       Customer Name:
//       <input type = "text" value={custName} onChange={(e) => setCustName(e.target.value)} />
//       </label>

//     <label>
//     how was the service
//     <select value={serviceRating} onChange={(e) =>setServiceRating(e.target.value)}>
//       <option value = {excellent}>Excellent</option>

//        <option value = {good}>Good</option>

//      <option value = {medium}>Medium</option>

//    <option value = {bad}>bad</option>
//     </select>
//     </label>

//     <button onClick={addcustomer}>Add Customer</button>

//     <h2>Customer Tips</h2>
//     <ul>
//       {customers.map((customer,index) => (
//       <li key={index}>{custName} - Tip : {addcustomer.tips}Rs</li>
//       ))}
//     </ul>
//   <div>
//   <h2>Total Tips : {totalTip}Rs
//   </h2>
// <h2>Total Customers : {totalCustomers.length}</h2>
//     </div>
//     </div>
//   );
// }
//   export default tipcal;