import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <hr/>
      <PortfolioPage/>
      <hr/>
      <ContactsPage/>
    </div>
  );
}

export default App;
