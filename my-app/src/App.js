// import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';

function App() {
  return (
    <>
    <Navbar title="To_do app" searchbar={false}/>
    <Header />
    <Todos />
    <Footer />
    </>
  );
}

export default App;
