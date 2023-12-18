import React, {useContext} from 'react';
import { TheamContext } from '../Home';

function NavBar() {
    const {toggleTheme , theme} = useContext(TheamContext);
  return (
    <div style={{
        color : theme.textColor , 
        backgroundColor : theme.bgColor ,
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent: "space-between",
        height : '10 vh'
    }}>
      <h3>Your App</h3>
      <button onClick={toggleTheme} >Change Theme</button>
    </div>
  );
}

export default NavBar;
