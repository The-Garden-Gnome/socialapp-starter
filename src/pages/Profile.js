import React from "react";
import {Link} from "react-router-dom"
import { Image, Layout,BackTop} from 'antd';
import "antd/dist/antd.css"
import Menu from "../components/menu/MenuAuthenticated";
import theQuestBoardHeader from '../media/theQuestBoardHeader.png'
import Footer from "../components/footer/Footer";
import { userIsAuthenticated } from "../redux/HOCs"; 
import { UpOutlined } from '@ant-design/icons';
import QuestboardService from "../components/servicesPage/ServicePage"
// comment section 



class Profile extends React.Component {
  constructor (props) {
  super(props) 
    this.state = {
      picture: "",
    }
  const questboardService = new QuestboardService()
  const userName = questboardService.getUsername()
  }
  render() {
    const { Header, Content } = Layout;
    // for backtop
    const style = {
      height: 40,
      width: 40,
      lineHeight: '40px',
      borderRadius: 4,
      backgroundColor: '#1088e9',
      color: '#fff',
      textAlign: 'center',
      fontSize: 14,
    };

    return (
      <Layout>
        <Menu />
        <Layout className="site-layout" style={{ marginLeft: 190 }}>
          <Header className="mainHeader" style={{ padding: 0, textAlign: 'center' }}> 
          <img className="theQuestBoardHeader" src={theQuestBoardHeader} alt="QuestBoard Header" /> </Header>

          <Content>
            <div>Username: {this.userName}</div>
            <div>Character:</div>
      </Content>
          
        </Layout>
      
{/* <Footer /> */}
</Layout>
    );
  }
}
export default userIsAuthenticated(Profile);


 
//  <BackTop>
//       <div style={style}>UP</div>
//     </BackTop> 