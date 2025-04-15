import AuthAPI from './auth';
import ThingsAPI from './things';

export const APIServices = {
  auth: new AuthAPI(),
  ...ThingsAPI,
};
