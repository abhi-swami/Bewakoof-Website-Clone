

import "./App.css";
import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2"
import Navbar3 from "./Components/Navbar3"
import AllPages from "./Pages/AllPages";
import Footer from "./Components/Footer"




function App() {
  return (
    <div className="App">
     <Navbar1/>
     <Navbar2/>
     <Navbar3/>
     <AllPages/>
     <Footer/>
    </div>
  );
}

export default App;
