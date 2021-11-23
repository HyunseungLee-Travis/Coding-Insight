import "react-native-gesture-handler";
import React, { useRef, useState, memo } from "react";
import { StatusBar, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, useToast } from "native-base";

import { home, ProgressPyF, MenuButton, Alert } from "./src/component.jsx";
import Settings, { setting } from "./src/setting.jsx";
import styles from "./src/style.jsx";
import global from "./src/global.jsx";

var Stack = createStackNavigator(),
  reloadWebView: any,
  isOnSetting: boolean = false,
  globalFunctions: any;

const Home = memo(({ navigation }: any) => {
  const webViewRef: any = useRef(null);
  const toast = useToast();

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (isOnSetting) {
      navigation.navigate("Home");
    } else if (global.ishome(globalFunctions.link, home)) {
      BackHandler.exitApp();
    } else {
      webViewRef.current.goBack();
    }

    return true;
  });

  const [webLoading, setWebLoading] = useState(true);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );
  const [visible, setVisible] = useState(false);

  const reload = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
    webViewRef.current.reload();
  };
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();
  const stop = () => {
    webViewRef.current.stopLoading();
    setWebLoading(false);
    toast.show({
      title: "Make sure!",
      description: "to reload to see the full page",
      status: "info",
    });
  };

  reloadWebView = reload;

  globalFunctions = {
    webViewRef,
    toast,
    webLoading,
    setWebLoading,
    link,
    setLink,
    visible,
    setVisible,
    reload,
    goback,
    goforward,
    stop,
    navigation,
    goToSetting: () => {
      navigation.navigate("Settings");
      isOnSetting = true;
    },
  };

  return (
    <>
      <Alert
        visible={visible}
        hide={() => setVisible(false)}
        setLink={(a: string) => setLink(a)}
      />
      <WebView
        {...global.webView}
        ref={webViewRef}
        source={{ uri: link }}
        onNavigationStateChange={(a: any) => setLink(a.url)}
        onLoad={() => setWebLoading(false)}
        onLoadProgress={() => setWebLoading(true)}
        userAgent="CIAV"
        thirdPartyCookiesEnabled={setting.cookie}
        showsHorizontalScrollIndicator={setting.scroll}
        showsVerticalScrollIndicator={setting.scroll}
        incognito={setting.secret}
        cacheEnabled={setting.cache}
        textZoom={parseInt(setting.text)}
        setBuiltInZoomControls={setting.zoom}
        injectedJavaScriptBeforeContentLoaded={setting.phone ? "" : global.js}
      />
      <ProgressPyF webLoading={webLoading} />
      <MenuButton
        gf={globalFunctions}
        menu={setting.menu}
        iconprop={{
          icon: "cog",
          onPress: () => navigation.navigate("Settings"),
          style: styles.icon,
        }}
      />
    </>
  );
});

const MainSetting = memo(({ navigation }: any) => {
  const MainSettingComponent = {
    close: navigation.goBack,
    reloadWebView: reloadWebView,
    isOnSetting: () => {
      isOnSetting = false;
    },
    reload: globalFunctions.reload,
  };

  return <Settings {...MainSettingComponent} />;
});

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar hidden />
        <Stack.Navigator screenOptions={global.screenopt}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={MainSetting} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default memo(App);
