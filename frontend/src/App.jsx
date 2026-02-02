import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/landing.jsx';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext.jsx';
import VideoMeetComponent from './pages/VideoMeet.jsx';
import HomeComponent from './pages/home.jsx';
import History from './pages/history.jsx';
import background from './assets/background.png'; 

function App() {

  return (
     <div className='App'>
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100vw',
        }}
        <Router>
          <AuthProvider>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/auth' element={<Authentication/>}/>
            <Route path='/home' element={<HomeComponent/>} />
            <Route path='/:url' element={<VideoMeetComponent/>} />
            <Route path='/history' element={<History/>} />
          </Routes>
          </AuthProvider>
        </Router>
     </div>
  )
}

export default App
