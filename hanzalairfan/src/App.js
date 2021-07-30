import Home from "./components/home/home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ServiceCard from "./components/Services/ServiceCard";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <Router>
  
    
    <Switch>
    
    <Route path="/ServiceCard" exact component={ServiceCard} />     
    <Route path="/About" exact component={About} />     
    <Route path="/Contact" exact component={Contact} />     
    <Route path="/" exact component={Home} />     

   </Switch>
  
  </Router>
  );
}

export default App;
