import HomeScreen from '@/pages/home';
import IRouteConfig from '@/router/typing';

type Key = 'Home';
const routes: Record<Key, IRouteConfig> = {
  Home: {
    name: 'Home',
    component: HomeScreen,
    options: {
      title: '首页',
    },
  },
};

export default routes;
