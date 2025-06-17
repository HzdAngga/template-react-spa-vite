export type TGetSingleUserParams = string | undefined;

export type TGetSingleUserResponse = {
  id: number;
  email: string;
  password: string;
  creationAt: string;
  name: string;
  role: string;
  avatar: string;
};
