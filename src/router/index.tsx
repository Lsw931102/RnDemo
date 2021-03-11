/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomePage from '@/pages/home';
// import ProfilePage from '@/pages/profile';
import StackRoute from './page-route';
import TabRoute from './tab-route';
import IRouteConfig from './typing';

// 循环展开路由
const routes: IRouteConfig[] = [];
Object.keys(StackRoute).forEach((key) => {
  // @ts-ignore
  Object.keys(StackRoute[key]).forEach((subKey) => {
    // @ts-ignore
    routes.push(StackRoute[key][subKey]);
  });
});
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerNav = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="home" component={HomePage} />
//       <Drawer.Screen name="profile" component={ProfilePage} />
//     </Drawer.Navigator>
//   );
// };

const Router: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="tabs"
            component={TabRoute}
            options={{ headerShown: false }}
          />
          {routes.map((item) => (
            <Stack.Screen
              key={item.name}
              name={item.name}
              component={item.component}
              options={item.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
