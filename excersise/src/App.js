import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Hello, React! 🚀</h1>
      <p>This is a simple React App.</p>
    </div>
  );
}
// function greet(name,mess = "Hello") {
//   return "Helo my name is " +name+ "and i want said "+mess;

// }
// const greet1 = greet("Raj");
// console.log(greet1);
// console.log(greet("Raj","I danger"));
// const mang = ["con meo", "con heo", "con rat"];

// const mangNew = mang.map((item) => ({text : item}));
// console.log(mangNew);
function transformToObjects(numberArray) {
  return console.log( numberArray.map((item) => ({val : item})));

  // const newArray = numberArray.map((item) =>({val : numberArray}))
  // return console.log(newArray);
}
const vall = [1,2,3];
transformToObjects(vall);
export default App;
