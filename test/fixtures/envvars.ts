export default {
  defaults: {
    name: 'Test',
    config: {
      version: "1",
      type: 'config'
    }
  },
  test: {
    name: 'env:TEST_NAME',
    config: {
      version: "env:TEST_VERSION",
      type: 'env:TEST_TYPE'
    }
  },
  production: {
    name: 'env:NAME',
    config: {
      version: "env:VERSION",
      type: 'env:TYPE'
    }
  },
};
