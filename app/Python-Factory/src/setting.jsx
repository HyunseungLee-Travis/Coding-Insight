import React, { useState, memo } from "react";
import {
  List,
  Checkbox as cb,
  Avatar,
  Appbar,
  FAB,
} from "react-native-paper";
import { SearchBar, Tooltip, Text } from 'react-native-elements';
import { View, ScrollView } from "react-native";
import { reloadAsync, manifest } from "expo-updates";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { More, Header, SettingBar } from "./component.jsx";
import styles from "./style.jsx";
import global from "./global.jsx";

const Tab = createMaterialTopTabNavigator();
var setting = {
  cookie: true,
  scroll: true,
  secret: true,
  cache: true,
  phone: true,
  menu: true,
  korean: true,
  bar: true,
};

function useForceUpdate () {
  const [ , setValue ] = useState( 0 );
  return () => setValue( ( value ) => value + 1 );
}

//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function WebSetting ( props ) {
  const [ Cookie, setCookie ] = useState( false );
  const changeCookie = () => {
    setCookie( ( p ) => !p );
    setting.cookie = Cookie;
  };

  const [ cache, setCache ] = useState( false );
  const changeCache = () => {
    setCache( ( p ) => !p );
    setting.cache = cache;
  };

  return (
    <List.Section title="Web Setting">
      { props.query.toLowerCase().indexOf( "cookie" ) != -1 ||
        props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>If you enable this, you can track all the YouTube Videos you watched of our channel Python-Factory!</Text> }>
          <List.Item
            title="Cookie"
            description="Enable Cookie For YouTube"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  onPress={ changeCookie }
                  status={ global.check( setting.cookie ) }
                />
              </View>
            ) }
            right={ () => (
              <Avatar.Icon icon="cookie" style={ styles.back } color="brown" />
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "cache" ) != -1 || props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>Caching makes our site faster because it saves it to your phone!</Text> }>
          <List.Item
            title="Cache"
            description="Enable Cache For Fast Speed"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  onPress={ changeCache }
                  status={ global.check( setting.cache ) }
                />
              </View>
            ) }
            right={ () => (
              <Avatar.Icon icon="cached" style={ styles.back } color="red" />
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }
    </List.Section>
  );
}

function LooksSetting ( props ) {
  const [ phone, setPhone ] = useState( false );
  const changePhone = () => {
    setPhone( ( p ) => !p );
    setting.phone = phone;
  };

  const [ scroll, setScroll ] = useState( false );
  const changeScroll = () => {
    setScroll( ( p ) => !p );
    setting.scroll = scroll;
  };
  return (
    <List.Section title="Style Setting">
      { props.query.toLowerCase().indexOf( "scroll" ) != -1 ||
        props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>Use the Scrollbar for navigating more easily!</Text> }>
          <List.Item
            title="Scroll"
            description="Enable Scrolling For Navigation"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  onPress={ changeScroll }
                  status={ global.check( setting.scroll ) }
                />
              </View>
            ) }
            right={ () => (
              <Avatar.Icon icon="mouse" style={ styles.back } color="grey" />
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "phone" ) != -1 || props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>If you want, you can make our site big to fit screen or small like a computer.</Text> }>
          <List.Item
            title="Phone Style"
            description="Enable Phone Style big View"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  onPress={ changePhone }
                  status={ global.check( setting.phone ) }
                />
              </View>
            ) }
            right={ () => (
              <View style={ [ styles.flexrow ] }>
                <Avatar.Icon
                  icon={ setting.phone ? "laptop" : "cellphone-text" }
                  style={ styles.back }
                  color="dodgerblue"
                />
              </View>
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }
    </List.Section>
  );
}

function OtherSetting ( props ) {
  const [ secret, setSecret ] = useState( false );
  const changeSecret = () => {
    setSecret( ( p ) => !p );
    setting.secret = secret;
  };

  const [ korean, setKorean ] = useState( false );
  const changeKorean = () => {
    setKorean( ( p ) => !p );
    setting.korean = korean;
  };

  return (
    <List.Section title="Accessibility Setting">
      { props.query.toLowerCase().indexOf( "secret" ) != -1 ||
        props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>Make sure you protect your data using the incognito mode!</Text> }>
          <List.Item
            title="Incognito"
            description="Do not let anybody watch you"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  onPress={ changeSecret }
                  status={ global.check( setting.secret ) }
                />
              </View>
            ) }
            right={ () => (
              <Avatar.Icon
                icon={ setting.secret ? "earth" : "incognito" }
                style={ styles.back }
                color="green"
              />
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "language" ) != -1 ||
        props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>Use English or Korean Homepage.</Text> }>
          <List.Item
            title="Language"
            description="Use Korean Homepage"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  onPress={ changeKorean }
                  status={ global.check( setting.korean ) }
                />
              </View>
            ) }
            right={ () => (
              <Avatar.Icon
                icon={ setting.korean ? "translate" : "ab-testing" }
                style={ styles.back }
                color="black"
              />
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }
    </List.Section>
  );
}

function AppSetting ( props ) {
  const [ menu, setMenu ] = useState( false );
  const changeMenu = () => {
    setMenu( ( p ) => !p );
    setting.menu = menu;
  };

  const [ bar, setBar ] = useState( false );
  const changeBar = () => {
    setBar( ( p ) => !p );
    setting.bar = bar;
  };

  return (
    <List.Section title="App Setting">
      { props.query.toLowerCase().indexOf( "menu" ) != -1 || props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>Use the menu buttons to quickly navigate or hide them.</Text> }>
          <List.Item
            title="Menu"
            description="Use the Menu Button"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  onPress={ changeMenu }
                  status={ global.check( setting.menu ) }
                />
              </View>
            ) }
            right={ () => (
              <Avatar.Icon
                icon={ setting.menu ? "menu" : "menu-open" }
                style={ styles.back }
                color="black"
              />
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }

      { props.query.toLowerCase().indexOf( "bar" ) != -1 || props.query == "" ? (
        <Tooltip { ...global.tooltip } popover={ <Text>Use the status bar or hide them if you hate it!</Text> }>
          <List.Item
            title="Bar"
            description="Show the status bar (top)"
            left={ () => (
              <View style={ styles.padten }>
                <cb.Item
                  mode="ios"
                  mode="ios"
                  onPress={ changeBar }
                  status={ global.check( setting.bar ) }
                />
              </View>
            ) }
            right={ () => (
              <Avatar.Icon
                icon="desktop-classic"
                style={ styles.back }
                color="black"
              />
            ) }
          />
        </Tooltip>
      ) : (
        <></>
      ) }
    </List.Section>
  );
}
//!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const AppBar = memo( ( props ) => (
  <Appbar.Header statusBarHeight={ 0 }>
    <Appbar.Action icon="clock-fast" onPress={ reloadAsync } />
    <Appbar.Content
      title="Coding-Insight App"
      subtitle={ global.browsername + " v" + manifest.version }
    />
    <Appbar.Action
      icon="close"
      onPress={ () => {
        props.close();
        props.reloadWebView();
      } }
    />
  </Appbar.Header>
) );

function MainSettingComponenet ( props ) {
  const forceUpdate = useForceUpdate();
  const [ searchQuery, setSearchQuery ] = useState( "" );

  const onChangeSearch = ( query ) => setSearchQuery( query );

  return (
    <>
      <ScrollView style={ styles.scrollview } contentContainerStyle={ styles.center }>
        <Header />
        <SearchBar
          placeholder="Search"
          onChangeText={ onChangeSearch }
          value={ searchQuery }
          containerStyle={ {
            backgroundColor: "transparent",
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
            margin: 10
          } }
          color="black"
          showLoading
          platform="ios"
        />
        <WebSetting query={ searchQuery } />
        <LooksSetting reload={ props.reload } query={ searchQuery } />
        <OtherSetting query={ searchQuery } />
        <AppSetting query={ searchQuery } />
      </ScrollView>

      <FAB
        small
        icon="lock-reset"
        color="black"
        style={ styles.fab }
        onPress={ () => {
          setting = {
            cookie: true,
            scroll: true,
            secret: true,
            cache: true,
            phone: true,
            menu: true,
            korean: true,
          };
          forceUpdate();
        } }
      />
    </>
  );
}

function MoreComponent () {
  const [ linkMore, setLinkMore ] = useState(
    "https://www.coding-insight.com/chat.html"
  );

  return (
    <>
      <More type={ linkMore } />
      <SettingBar setLinkMore={ setLinkMore } />
    </>
  );
}

function Settings ( props ) {
  return (
    <>
      <AppBar close={ props.close } reloadWebView={ props.reloadWebView } />

      <Tab.Navigator>
        <Tab.Screen name="Setting" component={ MainSettingComponenet } />
        <Tab.Screen name="More" component={ MoreComponent } />
      </Tab.Navigator>
    </>
  );
}

export { setting };
export default memo( Settings );
