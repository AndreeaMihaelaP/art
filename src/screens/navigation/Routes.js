import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Gallery from "../gallery/Gallery";
import Exhibitions from "../exhibitions/Exhibitions";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Category from "screens/gallery/Category";

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/exhibitions" component={Exhibitions} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/category" component={Category} />
      </Switch>
    </Router>
  );
};

export default Routes;
