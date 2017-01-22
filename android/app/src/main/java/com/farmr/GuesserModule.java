package com.farmr;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class GuesserModule extends ReactContextBaseJavaModule {
    public GuesserModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    
    @Override
    public String getName() {
        return "GuesserModule"; //GuesserModule is how this module will be referred to from React Native
    }
    
    @ReactMethod
    public void test(Promise promise) { //this method will be called from JS by React Native
        promise.resolve("Hello World! The GuesserModule exists.");
    }
}