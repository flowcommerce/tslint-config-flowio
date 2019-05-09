module.exports = {
  extends: 'tslint-config-airbnb',
  rules: {
    'import-name': false,
    'max-line-length': [true, {
      'limit': 120,
      'ignore-pattern': '^import |^export {(.*?)}',
    }]
  },
};