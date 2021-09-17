import './style/Bootstrap/bootstrap.css'
import './style/Styling.css'
import Login from './components/Login.js'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Navigate from './components/Navigate'

function App() {
  return (

     <Router>
     <Navigate/>
     <Switch>
       <Route path="/" component={Login} />
       <Route path="/Register" component={Register} />
     </Switch>
     </Router>
      
  );
}

export default App;
