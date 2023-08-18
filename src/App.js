import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import NavigationBar from "./components/layout/NavigationBar"
import Home from './components/pages/Home'
import Projetos from './components/pages/Projetos'
import NovoProjeto from './components/pages/NovoProjeto'
import Footer from './components/layout/Footer'
import Projeto from './components/pages/Projeto';

function App() {
  return (
    <div className="App">
     <Router>
        <NavigationBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/projetos' element={<Projetos/>}/>
          <Route exact path='/novoprojeto' element={<NovoProjeto/>}/>
          <Route exact path='/projeto/:id' element={<Projeto/>}/>
        </Routes>

        <Footer/>
     </Router>
    </div>
  );
}

export default App;
