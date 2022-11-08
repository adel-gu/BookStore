// React
import { Routes, Route } from 'react-router-dom';
// redux provider
import { Provider } from 'react-redux';
// Store
import store from './redux/configureStore';

import Navbar from './components/NavBar';
import Categories from './pages/Categories';
import Books from './pages/Books';

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Routes>
      <Route path='/' element={<Books />} />
      <Route path='categories' element={<Categories />} />
    </Routes>
  </Provider>
);

export default App;
