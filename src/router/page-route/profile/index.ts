import ProfileScreen from '@/pages/profile';
import IRouteConfig from '@/router/typing';

type Key = 'Profile';
const routes: Record<Key, IRouteConfig> = {
  Profile: {
    name: 'Profile',
    component: ProfileScreen,
    options: {
      title: '我的',
    },
  },
};

export default routes;
