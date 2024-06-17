import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from "./pages/Home/Home";
import VideoDetails from "./pages/VideoDetails/VideoDetails"
import UploadVideo from './pages/UploadVideo/UploadVideo';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<VideoDetails />} />
        <Route path="/upload" element={<UploadVideo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;