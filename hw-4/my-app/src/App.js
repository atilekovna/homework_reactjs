import './App.css';
import AboutAs from "./pages/aboutAs/AboutAs";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <AboutAs/>
      <PortfolioPage/>
      <ContactsPage/>
    </div>
  );
}

export default App;
