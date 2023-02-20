function App() {
  return (
    <div className="cust-nav d-flex flex-column flex-shrink-0 p-3 bg-light">
      <a
        href="/"
        className="d-flex justify-content-center mb-5 link-dark text-decoration-none"
      >
        <span className="fs-4">NeuralMind</span>
      </a>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="nav-link active">
            Train
          </a>
        </li>
        <li>
          <a href="/" className="nav-link link-dark">
            Admin
          </a>
        </li>
        <li>
          <a href="/" className="nav-link link-dark">
            Chat
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
