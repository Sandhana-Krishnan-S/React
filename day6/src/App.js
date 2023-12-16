import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Keylist from './components/Keylist';
import ListOfObj from './components/ListOfObj';
import ListOfObjNoDisp from './components/ListOfObjNoDisp';
import MUIButton from './components/MUIButton';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import ComplexGrid from './components/Grid';

function App() {
  return (
    <div className="App">
      <List />
      <Keylist />
      <ListOfObj />
      <ListOfObjNoDisp />
      <MUIButton />
      <DeleteOutlined />
      <ComplexGrid />
    </div>
  );
}

export default App;
