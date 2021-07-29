import Home from "./components/home/home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ServiceCard from "./components/Services/ServiceCard";


function App() {
  return (
    <Router>
  
    
    <Switch>
    
    <Route path="/ServiceCard" exact component={ServiceCard} />     
    <Route path="/" exact component={Home} />     

   </Switch>
  
  </Router>
  );
}

export default App;
