import ClassComponent from './Components/ClassComponent';
import Greeting from './Components/Greeting';
import Hello from './Components/Hello';
import One from './Components/twoFun';

function App() {
  return (
    <div className="App">
      <Hello />
      <ClassComponent />
      <One />
      <Greeting />
    </div>
  );
}

export default App;
