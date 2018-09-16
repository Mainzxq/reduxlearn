import React, { Component } from 'react'
import { HeaderWrapper, AppBar,LogoName, InfoBar, Logoimg } from './style'
import {Avatar} from 'antd'

class Header extends Component {

    render() {
        return (
            <div>
                <div style={{width:"100%", float:"top" ,
                     color:"#002B69", fontSize:"12px", background:"#ff9100",
                     height:"20px",  padding:"4px 2px"}}
                >
                    网站首页
                </div>
                <HeaderWrapper>
                    <AppBar>
                        <Logoimg href='/'></Logoimg>
                        <LogoName href='/'>SCCBA</LogoName>
                        <InfoBar href='/' className="left active">我的门户</InfoBar>
                        <InfoBar href='/' className="left">我的工作区</InfoBar>
                        <InfoBar href='/' className="left">我的生活区</InfoBar>
                       
                        <div style={{ 
                            lineHeight:"38px",right:"0",top:"0",
                            float:"right", color:"#fff", marginTop:"11px",
                            width:"auto", marginRight:"10px",fontSize:"17px",
                            display:"block"}}>Zhang Xiaoqian</div>
                        <Avatar size={32} icon="user" style={{
                            float:"right", marginTop:"11px", marginRight:"15px"
                        }} />
                    </AppBar>

                </ HeaderWrapper>
             </div>
        )
    }
}

export default Header;