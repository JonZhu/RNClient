/**
 * 地图API
 * 
 * @author zhujun
 * @date 2016-12-28
 * 
 * <p>
 * 反向地理编码
 * void reverseGeoCode(double lng, double lat, final Promise promise) <br/>
 * 
 * 地理编码
 * void geoCode(String city, String address, final Promise promise) <br/>
 * 
 * 在城市中搜索POI
 * void searchInCity(String city, String keyword, int dataLimit, final Promise promise) <br/>
 * 
 * </p>
 * 
 */

import { NativeModules } from 'react-native';

const MapModule = NativeModules.ReactBaiduMapModule;

export default MapModule;