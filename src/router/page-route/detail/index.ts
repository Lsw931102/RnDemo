import DetailScreen from '@/pages/detail';
import IRouteConfig from '@/router/typing';

type Key = 'Detail';
const routes: Record<Key, IRouteConfig> = {
  Detail: {
    name: 'Detail',
    component: DetailScreen,
    options: {
      title: '详情',
    },
  },
};

export default routes;
