export type TCreateUserParams = {
  payload: {
    email: string;
    password: string;
    name: string;
    avatar: string;
    role: 'admin' | 'customer';
  };
};

export type TCreateUserResponse = {
  id: number;
  avatar: string;
  creationAt: string;
  email: string;
  name: string;
  password: string;
  role: string;
  updatedAt: string;
};
