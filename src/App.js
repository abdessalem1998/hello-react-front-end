import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import GreetingsContainer from './GreetingsContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GreetingsContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
