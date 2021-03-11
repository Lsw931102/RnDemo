import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import {
  StackNavigationProp,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<Record<string, object | undefined>, 'Profile'>,
  StackNavigationProp<Record<string, object | undefined>>
>;

export type RouteProps = RouteProp<any, ''>;

export default interface IRouteConfig {
  name: string;
  component: React.ComponentType<any>;
  options: StackNavigationOptions;
}
