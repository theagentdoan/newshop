import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Slider from './component/slider';
import Homepage from './component/homepage';
import Shop from './component/shop';
import Detail from './component/detail';

function App() {
  return (
    <>
    <Header />
    <Slider />
    <Homepage />
    {/* <Shop /> */}
    {/* <Detail id={10} /> */}
    <Footer />
    </>
  );
}
export default App;
