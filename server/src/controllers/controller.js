const controller = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('my-strapi-plugin')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },
});

export default controller;
