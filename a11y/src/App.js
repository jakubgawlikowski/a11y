import './App.css';

function App() {
  return (
    <>
      <header role="banner">
        <h1>
          Accessibility demo page
        </h1>
        <form role="search">
          <input type="search" aria-label="search text" size="20"/>
          <input type="submit" value="Search"/>
        </form>
      </header>
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
        <main className="main" role="main" label="Main content">
          <h2>This is the main content of the page</h2>

          <div role="region" aria-labelledby="special-region">
            <h3 id="special-region">Special region</h3>
            <p>
            This is a region that I want the user to be able to find.
            </p>
          </div>
        </main>
        <footer className="footer" role="contentinfo">
          <p>This is a <a href="/">Footer link</a></p>
        </footer>
      </div>
    </>
  );
}

export default App;
