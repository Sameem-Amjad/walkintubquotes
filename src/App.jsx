import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import FirstForm from './components/FirstForm';
import FinalForm from './components/FinalForm';
import LoadingForm from './components/LoadingForm';

function App ()
{

  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */ }
        <Route path="/" element={ <FirstForm/> } />
        <Route path="/loadingForm" element={ <LoadingForm/> } />
        <Route path="/finalForm" element={ <FinalForm /> } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
