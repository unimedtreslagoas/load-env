import 'dotenv/config';

const loadEnv = (data: any) => {
  const node_env = process.env.NODE_ENV
    ? process.env.NODE_ENV.toLowerCase()
    : undefined;

  const keys = Object.keys(data.defaults);

  const envvars = {};

  keys.map(key => {
    if (node_env && node_env !== 'undefined') {
      const envvar =
        typeof data[node_env][key] !== 'object'
          ? data[node_env][key].split(':')[1]
          : key;
      if (typeof data[node_env][key] === 'object') {
        const keysOfObject = Object.keys(data[node_env][key]);
        keysOfObject.map(k => {
          const env = data[node_env][key][k].split(':')[1];
          if (envvars[key] === undefined) {
            envvars[key] = {};
          }
          if (process.env[env] !== undefined) {
            envvars[key][k] = process.env[env];
          } else {
            envvars[key][k] = data.defaults[key][k];
          }
        });
      } else if (process.env[envvar]) {
        envvars[key] = process.env[envvar];
      } else {
        envvars[key] = data.defaults[key];
      }
    } else {
      envvars[key] = data.defaults[key];
    }
  });

  return envvars;
};

export default loadEnv;
