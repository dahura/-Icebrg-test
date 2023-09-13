export interface RequestLoginData {
  email: string;
  password: string;
}

export interface ResponseLoginData {
  access_token: string;
  refresh_token: string;
}

export interface ResponseRefreshTokenData {
  access_token: string;
  refresh_token: string;
}
