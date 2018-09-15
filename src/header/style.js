import styled from 'styled-components'
import logoImg from '../statics/Logo.png'
// 创建一个组件的样式和次级样式并且导出，styled.div相当于一个带样式的div
export const HeaderWrapper = styled.div`
    height:60px;
    width:auto;
    height:60px;
    background:#002B69;

`;

export const AppBar = styled.div`
    pading: 0 19;
    line-height:56px;
    height: 100%;
    width: 1440px;
    margin: 0 auto;
    margin-bottom: 15px;

`;

export const LogoName = styled.div`
    padding: 0 15;
    possition: absolute;
    line-height: 56px
    margin-left:46px;
    display: block;
    font-Size: 18;
    color: #fff;
`;