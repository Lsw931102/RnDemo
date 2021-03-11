import React from 'react';
import { Text } from 'react-native';
import { NavigationProp, RouteProps } from '@/router/typing';

interface IProps {
  navigation: NavigationProp;
  route: RouteProps;
}
const Password: React.FC<IProps> = ({ navigation, route }) => {
  return (
    <>
      <Text>this is page forgot password</Text>
    </>
  );
};

export default Password;
