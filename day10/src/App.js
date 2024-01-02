import './App.css';
import CounterComponent from './thunk/CounterComponent';
import { Provider } from 'react-redux';
import { store } from './thunk/store';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <CounterComponent />
     </Provider>
    </div>
  );
}

export default App;
