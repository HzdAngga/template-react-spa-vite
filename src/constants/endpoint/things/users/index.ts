enum EndpointsUsers {
  GET_ALL_USERS = '/users',
  GET_SINGLE_USER = '/users/:id',
  CREATE_USER = '/users',
  UPDATE_USER = '/users/:id',
  CHECK_EMAIL = '/users/is-available',
}

export default EndpointsUsers;
