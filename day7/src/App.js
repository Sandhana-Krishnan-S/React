import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import TryCatch from './components/TryCatch';
import ComponentsLife from './components/ComponentsLife';
import LifecycleFunctional from './components/LifeCycleFunctional';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName = "Joker" />
      </ErrorBoundary>
      <TryCatch fruit = 'apple' />
      <ComponentsLife />
      <LifecycleFunctional />
    </div>
  );
}

export default App;
