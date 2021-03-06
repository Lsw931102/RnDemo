import React from 'react';
import { create } from 'dva-core';
import { Provider } from 'react-redux';
import createLoading from 'dva-loading';

declare const global: any;
export default function (options: any) {
  const app = create(options);
  app.use(createLoading());

  if (!global.registered)
    options.models.forEach((model: any) => app.model(model));
  global.registered = true;

  app.start();

  const store = app._store;

  app.start = (container: any) => () => (
    <Provider store={store}>{container}</Provider>
  );
  app.getStore = () => store;

  return app;
}
