import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationProp, RouteProps } from '@/router/typing';

interface IProps {
  navigation: NavigationProp;
  route: RouteProps;
}
const Home: React.FC<IProps> = ({ navigation, route }) => {
  console.log(route, navigation, 'detail');
  useEffect(() => {
    navigation.setOptions({
      title: `detail${route.params?.id}`,
    });
  }, [navigation, route.params]);

  return (
    <>
      <Text>this is page detail</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('home', {
            post: 'from detail',
          })
        }>
        <Text>back home</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
