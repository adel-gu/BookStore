// React
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Categories from './pages/Categories';
import Books from './pages/Books';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Books />} />
        <Route path='categories' element={<Categories />} />
      </Routes>
    </>
  );
};

export default App;
