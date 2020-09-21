import React from "react";
import MenuAuthenticated from "../Components/menu/MenuAuthenticated";
import { userIsAuthenticated } from "../redux/HOCs";
import MessageFeed2 from "../Components/feed2/Feed2"
import TextInput from "../Components/TextInput/TextInput"

class MessageFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: ""
    }
  }

  stateChange= (event) => {
    
    
    this.setState({post: event.target.value});
    console.log(this.state.post)

}

clicked(){
    console.log("clicked")
}


  render() {
    return (
      <div className="feed">
        <MenuAuthenticated isAuthenticated={this.props.isAuthenticated} />
            <TextInput />
            <MessageFeed2 />
      </div>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
