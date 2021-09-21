import './style/Styling.css'
import Login from './components/Login.js'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import Navigate from './components/Navigate'
import NotFoundPage from './components/NotFoundPage'

function App() {
  return (

     <Router>
     <Navigate/>
     <Switch>
       <Route path="/"  exact component={Login} />
       <Route path="/Register" component={Register} />
       <Route component={NotFoundPage} />
     </Switch>
     </Router>
      
  );
}

export default App;
