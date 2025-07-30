import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from './pages/home';
import { Contact } from './pages/contact';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
        
      </Routes>
      
    </BrowserRouter>

  );
};
export default App;
