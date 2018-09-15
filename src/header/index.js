import React, { Component } from 'react'
import { HeaderWrapper, AppBar,LogoName } from './style'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
    
                <AppBar>
                    <LogoName>SCCBA</LogoName>     
                </AppBar>
            </ HeaderWrapper>
        )
    }
}

export default Header;