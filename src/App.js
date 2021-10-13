import './App.css';
import Fedback from './comp/Fedback';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Answers from './comp/Answers';
function App() {
  return (
    <div className="App">
          <Router>
            <Route path='/' component={Fedback} exact/>
            <Route path='/answer' component={Answers}/>
            </Router>    
    </div>
  );
}

export default App;
