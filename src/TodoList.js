import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import Header from './header'
import {MainContentWrapper} from './style'
import store from './store' // create脚手架可以省去输入index.js的部分
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreaters';


// 1.安装 styled-components 个性化CSS
// 注：导入injectGlobal from 'styled-components'
// 2.安装 reset.css（查百度）
// 3.安装Redux
// 4.创建store目录，详见目录内相关文件
// 5.把做好的store引回来,store是整个工程中唯一的，reducer不唯一
// 6.建立handleInputValue函数，现在input组件里写一个onChange属性
// 7.开始建立handleButtonClick事件的函数，需要增加Button的onClick属性
// 8.建立handleDeleteItem
// 9.在store文件夹下建立actionType.js，格式化action的types，以常量代替字符串，利于排除bug
// 10.使用actionCreater统一创建action


class TodoList extends Component {

    constructor(props) {
        super(props);
        // 从store里把store对象拖回来初始化本组件的state
        this.state = store.getState() 
        
        // 处理input组件的值的函数，在初始化的时候把this的指向做修改，直接写在组件里会在后期影响性能
        this.handleInputValue = this.handleInputValue.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)

        // 订阅store后，store发生数据更新后，才会触发组件数据的更新
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return(
        <div>
            <Header />
            <MainContentWrapper>
                <div style={{marginLeft:"10px", marginTop:"10px"}}>
                    <Input placeholder="Input your Todo Job" style={{width:"300px",
                     marginRight:"10px"}} value={ this.state.inputValue } 
                     onChange={this.handleInputValue}
                     />
                    <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                </div>

                <List
                    style={{marginTop:"10px",marginLeft:"10px", width:"300px"}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) =>(
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </MainContentWrapper>
        </div>
        
        )
    }
    
    handleInputValue(e) {
        // console.log(e.target.value),可以看到事件对象中的值
        // 利用redux处理,在函数内写出action，然后dispatch回store，
        // 由store查询reducer决定该如何更新数据,下面返回reducer继续写
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     inputValue: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange() {
        // store完成更新后会通过subscribe订阅转会给组件，组件再做一次state更新，新的值就会带回来了
        this.setState(store.getState());
    }

    handleButtonClick() {
        // const action = {
        //     // 思考一下，为啥不需要操作value了
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     // index 是List组件的Item子组件的第二个参数，见组件内容
        //     index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}



export default TodoList