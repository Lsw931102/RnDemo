import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationProp, RouteProps } from '@/router/typing';
import styles from './style';

interface IProps {
  navigation: NavigationProp;
  route: RouteProps;
}

const Profile: React.FC<IProps> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <View style={styles.settingLine}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text>设置</Text>
        </TouchableOpacity>
      </View>
      <Text>this is page profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
