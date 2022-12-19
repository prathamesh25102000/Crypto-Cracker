import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import HeadCarousel from './components/HeadCarousel';
import Pages from './components/Pagination';
import Modal from './components/Modal';

function App() {
  return (
    <>
     <NavBar />
     <HeadCarousel />   
     <Pages /> 
    </>

  );
}

export default App;
