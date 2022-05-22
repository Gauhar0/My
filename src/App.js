
import './App.css';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Aside from './components/Aside/aside';

function App() {
  return (
    <div className="app">
   <Header/>
   <Aside/>
   <Main/>
   <Footer/>
    </div>
  );
}

export default App;
