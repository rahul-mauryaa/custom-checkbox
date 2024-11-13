const register = ({ strapi }) => {
  strapi.customFields.register({
    name: 'checkbox',
    plugin: 'my-strapi-plugin',
    type: 'string',
  });
};

export default register;
