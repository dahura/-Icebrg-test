export interface RequestLoginData {
  email: string;
  password: string;
}

export interface ResponseLoginData {
  id: number;
  email: string;
  username: string;
  name: string;
  roles: string[];
  locale: string;
  access_token: string;
  refresh_token: string;
}

export interface User
  extends Pick<ResponseLoginData, "email" | "name" | "username"> {}

export interface ResponseRefreshTokenData {
  access_token: string;
  refresh_token: string;
}
