import './App.css';
import Navbar from './Navbar/Navbar.jsx'
import {BrowserRouter} from 'react-router-dom'
import Introduction from './Introduction/Introduction.jsx';
import Software from './Software/Software';
import Works from './Works/Works';
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
     <Introduction />
     <Software />
    <Works/>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
