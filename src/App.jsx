import Begin from './Components/FirstComponent/Begin';
import Menu from './Components/SecondComponent/SecComponent';
import ThirdComponent from './Components/ThirdComponent/ThirdComponent';
import Galery from './Components/FourComponent/FourComponent';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Begin/>
      <Menu/>
      <ThirdComponent/>
      <Galery/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
