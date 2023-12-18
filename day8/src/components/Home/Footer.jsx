import React , {useContext} from 'react';
import { TheamContext } from '../Home';


function Footer() {
  const {theme} = useContext(TheamContext);
  return (
    <div
      style={{
        height: "8vh",
        backgroundColor: theme.bgColor,
        color: theme.textColor,
      }}
    >
      Footer
    </div>
  );
}

export default Footer;
