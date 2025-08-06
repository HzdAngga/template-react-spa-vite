export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  access_token: string;
  refresh_token: string;
};
