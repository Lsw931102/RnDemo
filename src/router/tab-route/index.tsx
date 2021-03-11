import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeConfig from '../page-route/home';
import ProfileConfig from '../page-route/profile';
import * as imgs from '@/assets/images/tab';

const Tab = createBottomTabNavigator();
const tabArr = [HomeConfig.Home, ProfileConfig.Profile];

interface IBar {
  focused: boolean;
  path: string;
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 20,
    height: 20,
  },
});

const TabJson: {
  [key: string]: any;
} = {
  [HomeConfig.Home.name]: {
    name: '首页',
    icon: imgs.homeIc,
    iconFocused: imgs.homeIcAC,
  },
  [ProfileConfig.Profile.name]: {
    name: '我的',
    icon: imgs.mineIc,
    iconFocused: imgs.mineIcAc,
  },
};

// icon 图标
const tabBarIcon: React.FC<IBar> = ({ focused, path }) => {
  return (
    <Image
      style={styles.tabIcon}
      source={focused ? TabJson[path].iconFocused : TabJson[path].icon}
    />
  );
};

export default () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#000',
        activeBackgroundColor: '#dedede',
      }}>
      {tabArr.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) =>
              tabBarIcon({ focused, path: item.name }),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
