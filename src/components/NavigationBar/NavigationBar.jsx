import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import searchImg from '../../assets/images/icons/search.svg';
import uploadImg from '../../assets/images/icons/upload.svg';
import './NavigationBar.scss';


const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleUploadClick = () => {
    navigate('/upload');
  };

  return (
    <header className="header">
      <nav className="header__navigation">
        <div className="header__navigation--container" onClick={handleLogoClick}>
          <img className="header__navigation--container-logo" src={logo} alt="logo" />
        </div>
        <div className="header__navigation--box">
          <div className="header__navigation--search">
            <img className="header__navigation--search-image" src={searchImg} alt="search image" />
            <h4 className="header__navigation--search-text">Search</h4>
          </div>
          <div className="header__navigation--avatar"></div>
        </div>
        <div className="header__navigation--upload" onClick={handleUploadClick}>
          <div className="header__navigation--upload-container">
            <img className="header__navigation--upload-container-image" src={uploadImg} alt="upload image" />
            <h4 className="header__navigation--upload-container-text">UPLOAD</h4>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;