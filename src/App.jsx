import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import NotFound from './components/NotFound';
import Subtract from './components/Subtract';
import Multiply from './components/Multiply';
import Divide from './components/Divide';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="add" element={<Add />} />
        <Route path="sub" element={<Subtract />} />
        <Route path="mul" element={<Multiply />} />
        <Route path="div" element={<Divide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
