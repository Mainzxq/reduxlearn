import React, { Component } from 'react'
import { Mlist, MLheader } from './style';

class NewsList extends Component {
    render(){
        return (
            <Mlist>
                <MLheader>公司要闻</MLheader>
                <div>NewsContent</div>
            </Mlist>
        )
    }
}

export default NewsList;