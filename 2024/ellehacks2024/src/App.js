import './App.css'
import Hello from './components/Hello.js';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import AboutUs from './components/AboutUs.js';
import JoinUS from './components/JoinUS.js';
import 'bootstrap/dist/css/bootstrap.min.css';
;

function App() {
  return (
    <div className="App">
       <NavBar />
       <Home />
       <AboutUs/>
       <JoinUS />;
      <Hello />
    </div>



  );
}

export default App;
