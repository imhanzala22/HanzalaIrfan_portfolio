import Home from "./components/home/home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
  
    
    <Switch>
    <Route path="/" exact component={Home} />       
   </Switch>
  
  </Router>
  );
}

export default App;
