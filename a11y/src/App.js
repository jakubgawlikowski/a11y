import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <ul className="menu">
        <li>Menu item 1</li>
        <li>Menu item 2</li>
        <li>Menu item 3</li>
        <li>Menu item 4</li>
        <li>Menu item 5</li>
        <li>Menu item 6</li>
        <li>Menu item 7</li>
      </ul>
      <div className="main">
        <p>This is the main content of the page</p>
      </div>
      <div className="footer">
        <p>This is a <a href="/one">Footer link</a></p>
      </div>
    </div>
  );
}

export default App;
