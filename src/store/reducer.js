import {
    ADD_TODO_ITEM,
    CHANGE_INPUT_VALUE,
    DELETE_TODO_ITEM,
} from './actionTypes'

const defaultState = {
    inputValue:'',
    list: [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
            ],
}

// 它是一个纯函数，给定固定输入，就会有固定输出，而且不会有副作用
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        // 先深拷贝一份state，why以后再说
        const newState = JSON.parse(JSON.stringify(state))
        // 把值交给新拷贝的state，原因以后再说
        newState.inputValue=action.inputValue
        return newState;
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        // 把传过来的inputValue给推进列表list里
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState;
    }

    return state;
}

// reducer输出两个参数
// 向store传递reducer，但是必须是一个函数 store/index.js那一侧需要import这个函数