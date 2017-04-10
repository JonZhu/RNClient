/**
 * Map组件
 * 
 * @author zhujun
 * @date 2016-12-17
 * 
 */

import React, { Component, PropTypes } from 'react';
import { requireNativeComponent, View, UIManager, findNodeHandle } from 'react-native';

class MapView extends Component {

  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this.setMapBound = this.setMapBound.bind(this);
    this._dispatchNativeUICmd = this._dispatchNativeUICmd.bind(this);
    this.move = this.move.bind(this);
  }

  _onChange(event) {
    if (event && event.nativeEvent) {
      var eventData = event.nativeEvent;
      var eventType = eventData.eventType;
      if ("statusChange" === eventType && this.props.onStatusChange) {
        this.props.onStatusChange(eventData);
      }
    }
  }

  // 触发本地ui命令
  _dispatchNativeUICmd(name, args) {
    // (int reactTag, int commandId, ReadableArray commandArgs)
    UIManager.dispatchViewManagerCommand(findNodeHandle(this._nativeMapView), 
      UIManager.AMapView.Commands[name], args);
  }

  // 设置地图显示范围为包括指定的所有点, [{lng, lat}]
  setMapBound(points) {
    this._dispatchNativeUICmd('setMapBound', points);
  }

  // 移动地图中心
  move(lng, lat) {
    this._dispatchNativeUICmd('move', [{lng:lng, lat:lat}]);
  }

  render() {
    return (
      <NativeMapView ref={(ref)=>{this._nativeMapView=ref}} {...this.props} onChange={this._onChange} />
    );
  }
}

MapView.propTypes = {
  ...View.propTypes,
  taxies: React.PropTypes.array, // taxi列表 [{id, lat, lng}]
  onStatusChange: React.PropTypes.func, // 地图状态改变事件, 如位置改变
};


const NativeMapView = requireNativeComponent('AMapView', MapView, {nativeOnly:{onChange:true}});

export default MapView;