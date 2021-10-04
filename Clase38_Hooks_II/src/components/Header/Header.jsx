import React, {useContext} from "react";
import Button from "@mui/material/Button";
import logo from "../../assets/hot-pot.png";
import Nav from "../Nav/Nav";
import { userContext } from "../../context/userContext";
import { themeContext } from "../../context/themeContext";



export const Header = () => {

  const { theme, toggleTheme } = useContext(themeContext)

  return (
    <header className={`header ${theme}`}>
      <img src={logo} alt="hot-pot" />
      <div className="header-title">
        <h1 className="header--h1">Mi app de comida</h1>
        <Nav theme={theme}/>
        <Button onClick={toggleTheme}>CAMBIA</Button>
      </div>
      <userContext.Consumer>
        {({ user, logout }) =>
          user.name ? (
            <>
              <p>Hola, {user.name}</p>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            ""
          )
        }
      </userContext.Consumer>
    </header>
  );
};

export default Header;
