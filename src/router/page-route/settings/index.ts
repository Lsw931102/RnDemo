import SettingsScreen from '@/pages/settings';
import IRouteConfig from '@/router/typing';

type Key = 'Settings';
const routes: Record<Key, IRouteConfig> = {
  Settings: {
    name: 'Settings',
    component: SettingsScreen,
    options: {
      title: '设置',
    },
  },
};

export default routes;
