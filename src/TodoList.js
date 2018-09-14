import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import Header from './header'
// 1.安装 styled-components 个性化CSS
// 导入injectGlobal from 'styled-components'
// 2.安装 reset.css

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class TodoList extends Component {

    render() {
        return(
        <div>
            <Header />
            <div style={{marginLeft:"10px", marginTop:"10px"}}>
                <Input placeholder="Input your Todo Job" style={{width:"300px", marginRight:"10px"}}/>
                <Button type="primary">提交</Button>
            </div>
            <List
                style={{marginTop:"10px",marginLeft:"10px", width:"300px"}}
                bordered
                dataSource={data}
                renderItem={item =>(<List.Item>{item}</List.Item>)}
            />
        </div>
        
        )
    }

}

export default TodoList