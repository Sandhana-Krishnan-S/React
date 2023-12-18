import React , { useContext } from 'react'
import { TheamContext } from '../Home';

function Body() {
    const { theme } = useContext(TheamContext);

    return (
      <div
        style={{
          height: "84.4vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: theme.bgColor,
          color: theme.textColor,
          alignItems: "center",
        }}
      >
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus voluptatibus quisquam, officia autem dolor ea veritatis recusandae unde. Atque neque vitae consequatur rem ad corporis commodi aperiam impedit maxime!</h3>
      </div>
    );
}

export default Body;
