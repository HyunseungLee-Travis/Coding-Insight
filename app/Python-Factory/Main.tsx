import "react-native-gesture-handler";
import React, { useRef, useState, memo } from "react";
import { StatusBar, BackHandler, Text } from "react-native";
import { WebView } from "react-native-webview";
import { createStackNavigator } from "@react-navigation/stack";
import { useToast } from "native-base";

import { home, ProgressPyF, MenuButton, Alert } from "./src/component.jsx";
import Settings, { setting } from "./src/setting.jsx";
import styles from "./src/style.jsx";
import global from "./src/global.jsx";

var Stack = createStackNavigator(),
  isOnSetting: boolean = false,
  globalFunctions: any;

const Home = memo(({ navigation }: any) => {
  const webViewRef: any = useRef(null);
  const toast = useToast();

  BackHandler.addEventListener("hardwareBackPress", () => {
    isOnSetting
      ? navigation.navigate("Home")
      : global.ishome(globalFunctions.link, home)
      ? BackHandler.exitApp()
      : webViewRef.current.goBack();

    return true;
  });

  const [webLoading, setWebLoading] = useState(true);
  const [link, setLink] = useState(
    setting.korean ? home : home + "/index-en.html"
  );
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);

  const reload = () => webViewRef.current.reload();
  const goback = () => webViewRef.current.goBack();
  const goforward = () => webViewRef.current.goForward();
  const stop = () => {
    webViewRef.current.stopLoading();
    setWebLoading(false);
    toast.show({
      title: "Make sure!",
      description: "to reload in order to see the full page",
      status: "info",
    });
  };
  const erase = () => {
    webViewRef.current.clearHistory();
    webViewRef.current.clearFormData();
    webViewRef.current.clearCache(true);
  };

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
    erase,
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
        thirdPartyCookiesEnabled={setting.cookie}
        showsHorizontalScrollIndicator={setting.scroll}
        showsVerticalScrollIndicator={setting.scroll}
        incognito={setting.secret}
        cacheEnabled={setting.cache}
        textZoom={parseInt(setting.text)}
        setBuiltInZoomControls={setting.zoom}
        injectedJavaScriptBeforeContentLoaded={setting.phone ? "" : global.js}
        onError={() =>
          toast.show({
            title: "Error :(",
            description: "Report this bug or re-install this app",
            status: "error",
          })
        }
        onHttpError={() =>
          toast.show({
            title: "HTTP Error",
            description: "This page does not exist",
            status: "warning",
          })
        }
        onRenderProcessGone={() =>
          toast.show({
            title: "Process Gone!",
            description: "Something went wrong",
            status: "error",
          })
        }
        renderError={(errorName) => <Text>{errorName}</Text>}
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
    reloadWebView: globalFunctions.reload,
    isOnSetting: () => {
      isOnSetting = false;
    },
    reload: globalFunctions.reload,
  };

  return <Settings {...MainSettingComponent} />;
});

const AppBase = memo(() => (
  <>
    <StatusBar hidden />
    <Stack.Navigator screenOptions={global.screenopt}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={MainSetting} />
    </Stack.Navigator>
  </>
));

export default memo(AppBase);
