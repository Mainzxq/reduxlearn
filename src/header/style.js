import styled from 'styled-components'
import logoImg from '../statics/Logo.png'

// 创建一个组件的样式和次级样式并且导出，styled.div相当于一个带样式的div

export const HeaderWrapper = styled.div`
    width:auto;
    height:60px;
    background:#002B69;

`;

export const AppBar = styled.div`
    pading: 0 19;
    line-height:56px;
    height: 100%;
    width: 1080px;
    margin: 0 auto;
    margin-bottom: 15px;

`;

export const LogoName = styled.div`
    padding: 0 10;
    possition: absolute;
    line-height: 56px
    margin:0 auto;
    margin-left:46px;
    width: 128px;
    display: block;
    font-Size: 18;
    color: #fff;
`;

export const InfoBan = styled.div`
    line-height: 8px;
    background: red,
    margin: 0 0,
    color: #fff,

`;