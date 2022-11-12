// React
import { Routes, Route } from 'react-router-dom';
// redux provider
import { Provider } from 'react-redux';

// Store
import store from './redux/configureStore';
// Components
import Navbar from './components/NavBar';
import Categories from './pages/Categories';
import Books from './pages/Home';

// StyleSheet
import 'bootstrap/dist/css/bootstrap.min.css';

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
