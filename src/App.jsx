import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Semantic HTML Example</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            ex ac urna luctus, at interdum velit blandit.
          </p>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Web Design</li>
            <li>Graphic Design</li>
            <li>Content Writing</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Semantic Example. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
