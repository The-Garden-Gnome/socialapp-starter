import React from "react";
import Menu from "../components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import LoginForm from "../components/loginForm/LoginForm"
import Feed from "./Feed";

class Profile extends React.Component {
  super(props) {
    this.state = {
      username: [],
      picture: "",
    }


    
  }

  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        
      </div>
    );
  }
}
export default userIsAuthenticated(Profile);
