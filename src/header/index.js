import React, { Component } from 'react'
import { HeaderWrapper, AppBar,LogoName, InfoBan } from './style'
import { height } from 'window-size';

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {

state = {
          current: 'mail',
        }

handleClick = (e) => {
                        console.log('click ', e);
                        this.setState({
                                        current: e.key,
                                      });
                      }

    render() {
        return (
            <div>
                <div style={{width:"100%", float:"top" ,
                     color:"#002B69", fontSize:"4px", background:"#ff9100",
                     height:"20px",  padding:"4px 2px"}}
                >
                    网站首页
                </div>
                <HeaderWrapper>

                    <AppBar>
                        <LogoName>SCCBA</LogoName>

                    </AppBar>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal" 
                        >
                          <Menu.Item key="mail" style={{width:"300px",  height:"30px",background:"red"}}>
                            <Icon type="mail" />Naviga1
                          </Menu.Item>
                      </Menu>
                </ HeaderWrapper>
             </div>
        )
    }
}

export default Header;