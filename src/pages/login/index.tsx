import React from 'react';
import { Text } from 'react-native';
import { NavigationProp, RouteProps } from '@/router/typing';

interface IProps {
  navigation: NavigationProp;
  route: RouteProps;
}
const Home: React.FC<IProps> = ({ navigation, route }) => {
  return (
    <>
      <Text>this is page login</Text>
    </>
  );
};

export default Home;
