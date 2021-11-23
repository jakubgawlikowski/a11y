/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Modal from './Modal';
import { Dialog } from './Dialog';
import Tooltip from './Tooltip';

import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <header role="banner">
        <h1 tabIndex="0">
          Accessibility demo page
        </h1>
      </header>

      <div className="container">
        <main className="main" role="main" aria-label="Labelled as Main content" id="main-content" tabIndex="0">
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
        <nav className="menu" role="navigation">
          <ul>
            <li><Modal/></li>
            <li><Dialog /></li>
            <li><Tooltip tabIndex="0" /></li>
            <li>Menu item 4</li>
            <li>Menu item 5</li>
            <li>Menu item 6</li>
            <li>Menu item 7</li>
          </ul>
        </nav>
        <footer className="footer" role="contentinfo" aria-labelledby="footer-label">
          <p id="footer-label">Links in the footer</p>
          <p><a href="#main-content">Go to main content.</a></p>
          <p><a href="/two">This is the second link.</a></p>
          <p><a href="/three">This is the third link.</a></p>
          <p><a href="/four">This is the fourth link.</a></p>
        </footer>
      </div>
      <form role="search" className="search">
        <input type="search" aria-label="search text" size="20"/>
        <input type="submit" value="Search"/>
      </form>
    </StyledEngineProvider>
  );
}

export default App;
