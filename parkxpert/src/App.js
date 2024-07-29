import './App.css';
import appLogo from './assets/app-logo.png';
import { Button } from '@mui/material';
import { GoArrowLeft } from "react-icons/go";

function App() {
  return (
    <div className="App">
      <div className="main-background" >
        <div className='app-logo'>
        <img src={appLogo} alt="app-logo"/>
    </div>
      </div>

      <div className='set-password'>
      <div className='custom-back-button'>

      <Button  variant="outlined" ><GoArrowLeft />Back </Button>
      </div>
      </div>
    </div>
  );
}

export default App;
