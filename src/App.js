import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Slider from './component/slider';
import Homepage from './component/homepage';
import Shop from './component/shop';
import Detail from './component/detail';
import HookComp from './component/hookComp';
import NoMatch from './component/NoMatch';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Contact from './component/Contact';
import CatFeaturedProduct from './component/CatfeaturedProduct';

function App() {
  return (
    <Router>
    <Header />
    <Slider />
    <Switch>
      <Route exact path ="/">
        <Homepage /> 
      </Route>
      <Route exact path ={["/shop", "/shop/:category"]}>
        <Shop />
        </Route>
        <Route path ="/detail/:id">
        <Detail />
        </Route>
        <Route path ="/contact">
        <Contact />
        </Route>
        {/* <Route path ="/cat/:category">
        <CatFeaturedProduct />
        </Route> */}
        <Route path="*">
            <NoMatch />
        </Route>
    </Switch>
    <Footer />
    </Router>
  );
}
export default App;
