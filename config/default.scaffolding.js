const {
  TYPES: {
    FOLDER,
  },
} = require('./constants');

module.exports = {
  bricks: [
    {
      name: 'app',
      type: FOLDER,
      bricks: [
        {
          name: 'api',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'components',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'constants',
          bricks: [],
          type: FOLDER,

        },
        {
          name: 'decorators',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'i18n',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'pages',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'redux',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'sagas',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'selectors',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'server',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'static',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'style',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'types',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'utils',
          bricks: [],
          type: FOLDER,
        },
        {
          name: 'routes',
          bricks: [],
          type: FOLDER,
        }
      ]
    }
  ]
};