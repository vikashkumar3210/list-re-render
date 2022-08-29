import React from "react";

function App() {
  var [items, setItem] = React.useState([]);
  var value;
  function handleChange(event) {
    value = event.target.value;
  }
  function handleClick() {
    setItem(function (previousValue) {
      return [...previousValue, value];
    });
  }
  function List(element) {
    return <li>{element}</li>;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(List)}</ul>
      </div>
    </div>
  );
}

export default App;
