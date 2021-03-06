package com.todaytaxi.map;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.todaytaxi.map.amap.AMapNaviModule;
import com.todaytaxi.map.amap.AMapNaviViewManager;
import com.todaytaxi.map.amap.AMapModule;
import com.todaytaxi.map.amap.AMapViewManager;
//import com.todaytaxi.map.amap.ReactMapModule;
//import com.todaytaxi.map.amap.ReactMapViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by Administrator on 2016/12/17 0017.
 */

public class MapReactPackage implements ReactPackage {

    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AMapModule(reactContext));
        modules.add(new AMapNaviModule(reactContext));
        return modules;
    }

    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> list = new ArrayList<>();
        list.add(new AMapViewManager());
        list.add(new AMapNaviViewManager());
        return list;
    }

}
