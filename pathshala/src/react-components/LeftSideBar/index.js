import React from "react";

import "./styles.css";
import "../../App.css";
import icon from "./static/logo.png";

import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core"; 
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import NavBar from './NavBar/index';

import { logout } from "../../actions/users";

/* Component for the left SideBar */
class LeftSideBar extends React.Component {
  render() {
    const { app, username, isAdmin, onEventsPage, setOnEventsPage } = this.props
    return (
      <div id="sidebar-div">

        <div>
          <div id="app-info">
            <div className="app-logo">
              <img src={ icon } style={{ width:"250px"}}/>
            </div>
            <div>
              <div id="username">@{ username }</div>
            </div>
          </div>

          <NavBar 
            isAdmin={ isAdmin } 
            onEventsPage={ onEventsPage } 
            setOnEventsPage={ setOnEventsPage } 
          />
        </div>
        
        <div id="logout-button">
          <Link className="unstyled-link" to="/login" onClick={ () => logout(app) }>
            <Button
              disableElevation
              variant="contained"
              style={{backgroundColor:"blue",color:"white"}}
              endIcon={<ExitToAppIcon />}
            >
              Logout
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;