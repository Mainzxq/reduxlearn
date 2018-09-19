import React, { Component } from 'react'
import { Mlist, MLheader, MListItem, MainNews, MainNewsTitle } from './style';

const data = [
    "[新闻]朱镕基亲笔赠言的清华经管学院干研班",
    "[通知]有腔有调 | 中秋节我们给你摘月亮",
    "[新闻]国家安全部门罕见发布通告，披露台湾间谍案",
    "[政策]北京中科科教发展基金会捐赠仪式在我校举行",
]


class NewsList extends Component {
    render(){
        return (
            <Mlist>
                
                    <MainNewsTitle className="title">今天重要信息播报</MainNewsTitle>
                    <MainNews >构思、列版、设计、出图、到制作，纯4A级别模板制作流程。模板以质感、天红色和橙色为主调，简洁、干净、大气。</MainNews>
                    <MainNewsTitle className="title">今天重要信息播报</MainNewsTitle>
                    <MainNews >澳门的博彩业为玩家开发崭新现场游戏，为广大客户提供一个安全保障的游戏中心；澳门的牌坊是2018年澳门的博彩业官方唯一指定信誉认证官方网站</MainNews>
                <MLheader> <div style={{marginLeft:"16px"}}>公司要闻</div></MLheader>
                { data.map((item, index) => {
                    return(
                    <a><MListItem>{item}</MListItem></a>
                    )}
                )}
                
            </Mlist>
        )
    }
}

export default NewsList;