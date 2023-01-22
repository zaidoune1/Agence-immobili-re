import './App.css';
import ImgBody from './compounents/ImgBody';
import Navigation from './compounents/NavBar';
import Products from './Products';
import { Routes, Route } from 'react-router-dom';
import Apropos from './compounents/Apropos';
import Error from './compounents/Error';
import SingalApart from './compounents/SingalApart';


function App() {
  return (
    <div className="App">
      <Navigation/> 
          <Routes>
            <Route path='/' element= {<Products/>}>  </Route>
            <Route path='/A-propos' element={<Apropos/>} ></Route>
            <Route path='/SingalApart' element={<SingalApart/>} ></Route>
            <Route path='*' element= {<Error/>}> </Route>
          </Routes>
    </div>
  );
}

export default App;
