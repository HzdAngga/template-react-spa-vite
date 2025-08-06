export type TUpdateUserParams = {
  id: string;
  payload: {
    email: string;
    password: string;
    name: string;
    avatar: string;
    role: 'admin' | 'customer';
  };
};

export type TUpdateUserResponse = {
  id: number;
  avatar: string;
  creationAt: string;
  email: string;
  name: string;
  password: string;
  role: string;
  updatedAt: string;
};
