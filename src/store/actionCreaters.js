import { 
    CHANGE_INPUT_VALUE, 
    ADD_TODO_ITEM, 
    DELETE_TODO_ITEM } from "./actionTypes";

// 支持输入框可以编辑
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
});

// 支持增加列表中的项
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

// 支持单击删除列表中的项
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});