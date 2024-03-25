import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Header } from './component/Header';
import { Home} from './component/Home';
import { Footer } from './component/Footer';
import { History } from './other/Main';
import { Vision } from './other/Main';
import { Mission } from './other/Main';
import { Pastor } from './other/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/history' element={<History/>}/>
        <Route path= '/vision' element={<Vision/>}/>
        <Route path= '/history' element={<Mission/>}/>
        <Route path= '/history' element={<Pastor/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
