// Import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';



function App() {
  return (
    <>
    <Header />
    <SideBar />
    <Main />
    <LoginPage />
    <RegisterPage />
    </>
  );
}

export default App;

