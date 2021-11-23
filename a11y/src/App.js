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
        <h1>
          Accessibility demo page
        </h1>
      </header>
      <a className="skipLink" href="#main-content">Skip to main content</a>
      <form role="search">
        <input type="search" aria-label="search text" size="20"/>
        <input type="submit" value="Search"/>
      </form>
      <div className="container">
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
        <main className="main" role="main" aria-label="Main content" id="main-content" tabIndex="0">
          <h2>This is the main content of the page</h2>

          <section aria-labelledby="special-region">
            <h3 id="special-region">Special region</h3>
            <p>
            This is a region that I want the user to be able to find.
            </p>
          </section>
          <section>
            <h3 id="special-region2">Some other region</h3>
            <p>
            This is a another generic region.
            </p>
          </section>
          <section>
            <h3 id="special-region3">Yet another region</h3>
            <p>
            This is still another generic region.
            </p>
          </section>
        </main>
        <footer className="footer" role="contentinfo" aria-labelledby="footer-label">
          <p id="footer-label">Links in the footer</p>
          <p><a href="/one">This is the first link.</a></p>
          <p><a href="/two">This is the second link.</a></p>
          <p><a href="/three">This is the third link.</a></p>
          <p><a href="/four">This is the fourth link.</a></p>
        </footer>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
