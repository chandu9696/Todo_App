
import './App.css';
import DisplayData from './Componets/DisplayData';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Weather from './Componets/Weather';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<DisplayData/>}/>
          <Route path='/weather' element={<Weather/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
