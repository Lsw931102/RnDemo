import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProps } from '@/router/typing';

interface IProps {
  navigation: NavigationProp;
  route: RouteProps;
}
const Settings: React.FC<IProps> = ({ navigation, route }) => {
  console.log(route.params, 'Settings');
  return (
    <>
      <Text>this is page setting</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>退出登录</Text>
      </TouchableOpacity>
    </>
  );
};

export default Settings;
