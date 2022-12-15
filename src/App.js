import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Users from './components/Users/Users';
import Pages from './components/Pages/Pages';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <div className='App'>
        <NavBar />
        <div className='content'>
          <Routes >
            <Route path='/users' element={<div><Users/></div>}/>
            <Route path='/pages' element={<div><Pages /></div>}/>
            <Route path='/settings' element={<div>Настройки</div>}/>
            <Route extends path='/'  element={<div>Main</div>} />
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
