import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  
import Navigate from './router/Navigate';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <h1>Hello</h1>
     <BrowserRouter>
      <Navigate />
        <Routes>
          <Route path='/login' element = <Login/> > </Route>
          <Route path='/signup' element = <Signup/> > </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
