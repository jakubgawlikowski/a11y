import React from 'react';
import Error from './error.png';
import Check from './check.png';
import './App.css';

function App() {
  return (
    <>
      <header role="banner">
        <h1>
          Accessibility demo page
        </h1>
      </header>
      <form role="search">
        <input type="search" aria-label="search text" size="20"/>
        <input type="submit" value="Search"/>
      </form>
      <div className="container">
        <nav className="menu" role="navigation">
          <ul>
            <li>Menu item 1</li>
            <li>Menu item 2</li>
            <li>Menu item 3</li>
            <li>Menu item 4</li>
            <li>Menu item 5</li>
            <li>Menu item 6</li>
            <li>Menu item 7</li>
          </ul>
        </nav>
        <main className="main" role="main" aria-label="Main content">
          <h2>This is the main content of the page</h2>
          <section>
            <h3 id="special-region2">Some region</h3>
            <p className="error"><img src={Error} alt="" />Information about a task status</p>
            <p className="check"><img src={Check} alt="" />Information about a task status</p>
          </section>
        </main>
        <footer className="footer" role="contentinfo">
          <p>This is the first <a href="/">link</a>.</p>
          <p>This is the second <a href="/">link</a>.</p>
          <p>This is the third <a href="/">link</a>.</p>
          <p>This is the fourth <a href="/">link</a>.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
