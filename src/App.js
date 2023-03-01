import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Partnyorlar from './components/Partnyorlar';
import Data from './components/Data'
import AwardsContainer from './components/AwardsContainer';

function App() {
  return (
    <>
    <Navbar/>
    <Introduction/>
    <Partnyorlar/>
    <Data/>
    <AwardsContainer />
    </>
    
  );
}

export default App;
