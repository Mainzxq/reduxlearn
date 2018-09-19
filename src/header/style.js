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
    margin-bottom: 16px;

`;
export const Logoimg = styled.a`
    position: absolute;
    margin: 12px auto;
    display: block;
    width: 32px;
    height: 32px;
    background: url(${logoImg});
    background-size: contain;
`;

export const LogoName = styled.a`
    overflow:hidden;
    padding: 0 10;
    position: relative;
    line-height: 56px
    margin:0 auto;
    margin-left:46px;
    width: 128px;
    display: block;
    font-Size: 18;
    color: #fff;
    float: left;
`;

export const InfoBar = styled.a`
    overflow:hidden;
    line-height: 58px;
    display: block;
    margin:0 15px;

    width: 100px;
    font-size: 14px;
    text-align: center;

    &.left {
        float: left;
        color: #fff;
    }

    &.right {
        float: right;
        color: #fff;
    }

    &.active {
        color: #ff9100;
        border-bottom: 2px solid;
        padding-bottom: -5px;
    }
    &:hover {
        color: #ff9100;
        border-bottom: 2px solid;
        padding-bottom: -5px;
    }

`;