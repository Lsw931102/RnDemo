const namespace = 'global';
export { namespace };

export default {
  namespace,
  state: {
    isLogin: false,
  },
  effects: {},
  reducers: {
    setState(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
};
