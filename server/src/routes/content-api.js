export default [
    {
      method: 'GET',
      path: '/',
      // name of the controller file & the method.
      handler: 'controller.index',
      auth:false,
      config: {
        policies: [],
      },
    },
  ];
  