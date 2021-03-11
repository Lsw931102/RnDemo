import LoginScreen from '@/pages/login';
import PasswordScreen from '@/pages/password';
import IRouteConfig from '@/router/typing';

type Key = 'Login' | 'Password';
const routes: Record<Key, IRouteConfig> = {
  Login: {
    name: 'Login',
    component: LoginScreen,
    options: {
      title: '登录',
    },
  },
  Password: {
    name: 'Password',
    component: PasswordScreen,
    options: {
      title: '忘记密码',
    },
  },
};

export default routes;
