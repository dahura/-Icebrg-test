import {
  RequestLoginData,
  ResponseLoginData,
  ResponseRefreshTokenData,
} from "./types";

const TOKEN_EXPIRATION_THRESHOLD = 15 * 60 * 1000;
export class AuthService {
  private token: string;
  private refresh_token: string;
  private refresh_time: number | null;

  constructor() {
    this.token = "";
    this.refresh_token = "";
    this.refresh_time = null;
  }
  async login(credentials: RequestLoginData) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const { access_token, refresh_token, email, name, username } =
      (await response.json()) as ResponseLoginData;
    this.refresh_token = refresh_token;
    this.token = access_token;
    this.refresh_time = new Date().getTime();
    return { access_token, refresh_token, user: { email, name, username } };
  }
  async getToken() {
    if (this.isTokenExpired()) {
      await this.refreshToken();
    }
    return this.token;
  }

  private isTokenExpired() {
    if (this.refresh_time === null) {
      return false;
    }
    const currentTime = new Date().getTime();
    const tokenAge = currentTime - this.refresh_time;
    return tokenAge > TOKEN_EXPIRATION_THRESHOLD;
  }

  private async refreshToken() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/login/refresh`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        method: "POST",
        body: JSON.stringify({ refresh_token: this.refresh_token }),
      }
    );
    const { access_token, refresh_token } =
      (await response.json()) as ResponseRefreshTokenData;
    this.token = access_token;
    this.refresh_token = refresh_token;
    this.refresh_time = new Date().getTime();
  }

  logOut() {
    (this.token = ""), (this.refresh_token = ""), (this.refresh_time = null);
  }
}
export const authService = new AuthService();
