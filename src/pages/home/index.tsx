import React from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationProp, RouteProps } from '@/router/typing';
// import PathMapping from '@/router/page-route';

interface IProps {
  navigation: NavigationProp;
  route: RouteProps;
}

const Home: React.FC<IProps> = ({ navigation, route }) => {
  console.log(route, route.params, '111');

  return (
    <SafeAreaView>
      <Text>this is page home</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            id: 0,
          })
        }>
        <Text>go detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.jumpTo('Profile', {
            userId: '1',
          })
        }>
        <Text>go profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
