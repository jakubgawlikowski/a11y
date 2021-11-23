import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Modal from './Modal';
import { Dialog } from './Dialog';

import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
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
            <li><Modal/></li>
            <li><Dialog /></li>
            <li>Menu item 3</li>
            <li>Menu item 4</li>
            <li>Menu item 5</li>
            <li>Menu item 6</li>
            <li>Menu item 7</li>
          </ul>
        </nav>
        <main className="main" role="main" aria-label="Main content">
          <h3>This is the main content of the page</h3>

          <section aria-labelledby="special-region">
            <h2 id="special-region">Special region</h2>
            <p>
            This is a region that I want the user to be able to find.
            </p>
          </section>
          <section>
            <h1 id="special-region2">Some other region</h1>
            <p>
            This is a another generic region.
            </p>
          </section>
          <section>
            <h2 id="special-region3">Yet another region</h2>
            <p>
            This is still another generic region.
            </p>
          </section>
        </main>
        <footer className="footer" role="contentinfo">
          <p>This is the first <a href="/">link</a>.</p>
          <p>This is the second <a href="/">link</a>.</p>
          <p>This is the third <a href="/">link</a>.</p>
          <p>This is the fourth <a href="/">link</a>.</p>
        </footer>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
