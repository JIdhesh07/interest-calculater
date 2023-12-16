
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {
 const [amount,setamount]=useState(0);//1000
 const[year,setyear]=useState(0);//5
 const[rate,setrate]=useState(0);//3

const[interest,setinterest]=useState(0)

console.log(amount);
console.log(year);
console.log(rate);

const calculater =(e)=>{
const output= amount*year*rate/100;
console.log(output);
setinterest(output)

}

const clear=(e)=>{
  setinterest(0)
 setamount(0)
 setyear(0)
setrate(0)
}


  return (
    <div className="App">
     <div className="conataner">
<div className="header">

  <h1>simple Interest calculater</h1>
  <p>calculater your simple Interest with us 💖</p>
</div>
<br />
<div className="total">

  <h3>&#8377;{interest}</h3>
  <p>your total Interest</p>
</div>
<br />

<br />
<div className="form">
<div className="input">
<TextField id="outlined-basic" value={amount||""} onChange={(e)=>setamount(e.target.value)} label="Amount" variant="standard" />
<br />
<TextField id="filled-basic"  value={year||""} onChange={(e)=>setyear(e.target.value)} label="Year" variant="standard" />
<br />
<TextField id="standard-basic" value={rate||""} onChange={(e)=>setrate(e.target.value)} label="Rate" variant="standard" />

</div>

</div>

<br />
<br />

<div className="button">


<Button onClick={e=>calculater(e)} variant="contained">Calculater</Button>
<Button onClick={e=>clear(e)} variant="outlined">Reset</Button>

</div>

</div>
    </div>
  );
}

export default App;
