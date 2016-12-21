package com.todaytaxi;

import android.os.Bundle;

import com.baidu.mapapi.SDKInitializer;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TodayTaxi";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // 初始化百度地图
        SDKInitializer.initialize(getApplicationContext());
    }
}
