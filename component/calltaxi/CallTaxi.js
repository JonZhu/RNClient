/**
 * 叫车页
 * @date 2016-11-28
 * 
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import ToolBar from './ToolBar';
import SideBar from './SideBar';
import FromGo from './FromGo';

class CallTaxi extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: 'rgb(240,239,233)'}}>
                <ToolBar iconOnPress={this.props.toggleSideBar}/>
                <FromGo/>

                {this.props.sideBar.isShow && <SideBar backgroundOnPress={this.props.toggleSideBar}/>}
            </View>

        );
    }

}

export default CallTaxi;
