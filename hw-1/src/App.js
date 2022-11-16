import './App.css';

function AboutUs () {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  )
}

function Portfolio () {
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
    )
}

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <Portfolio/>
    </div>
  );
}

export default App;
