import React, {createContext , useState} from 'react'
import NavBar from './Home/NavBar';
import Body from './Home/Body';
import Footer from './Home/Footer';

export const TheamContext = createContext({});
function Home() {

    const [theme, setTheme] = useState({
        bgColor : "white" , 
        textColor : "black" ,
    });

    const toggleTheme = () => {
        theme.bgColor === "white" ? setTheme({
            bgColor : "black" , 
            textColor : "white" ,
        }) : setTheme({
            bgColor : "white" , 
            textColor : "black" ,
        })
    }

    const val = {
        toggleTheme ,
        theme ,
    };

  return (
    <TheamContext.Provider value = {val}>
      <NavBar />
      <Body />
      <Footer />
    </TheamContext.Provider>
  )
}

export default Home;
