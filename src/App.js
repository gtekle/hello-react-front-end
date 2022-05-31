import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import store from './store/configureStore';
import Greeting from './components/Greeting';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element="Home!" />
          <Route exact path="/greeting" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
