import './App.css';
import Fedback from './comp/Fedback';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Answers from './comp/Answers';
import OtherAnswer from './comp/Answer/Others/OtherAnswer';
import PremiumAnswer from './comp/Answer/Premium/PremiumAnswer';
import TrendingAnswer from './comp/Answer/Trending/TrendingAnswer'
import VideoHiderAnswer from './comp/Answer/VideoHider/VideoHiderAnswer'
import BrowserAnswer from './comp/Answer/Browser/BrowserAnswer';
import DownloadAnswer from './comp/Answer/Download/DownloadAnswer';
import AudioAnswer from './comp/Answer/Audio/AudioAnswer';
import VideoAnswer from './comp/Answer/Video/VideoAnswer';
function App() {
  return (
    <div className="App">
          <Router>
            <Route path='/' component={Fedback} exact/>
            <Route path='/answer' component={Answers}/>
            <Route path='/othersanswer' component={OtherAnswer}/>
            <Route path='/premiumanswer' component={PremiumAnswer}/>
            <Route path="/trendinganswer" component={TrendingAnswer} />
            <Route path='/hideranswer' component={VideoHiderAnswer}/>
            <Route path="/browseranswer" component={BrowserAnswer}/>
            <Route path='/downloadanswer' component={DownloadAnswer}/>
            <Route path='/audioanswer' component={AudioAnswer}/>
            <Route path="/videoanswer"component={VideoAnswer}/>
            </Router>    
    </div>
  );
}

export default App;
