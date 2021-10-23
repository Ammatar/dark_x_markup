import './App.css';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Header/Header';
import Review from './components/Review/Review';
import Tiles from './components/Tiles/Tiles';

function App() {
  return (
    <div className='App'>
      <Header />
      <Tiles />
      <Benefits />
      <GetStarted />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
