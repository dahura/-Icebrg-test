import { authService } from "../auth/authService";

export const fetcher = async (route: string, init?: RequestInit) => {
  let token = await authService.getToken();
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  headers["Authorization"] = `Bearer ${token}`;

  return await fetch(`${import.meta.env.VITE_API_URL}${route}`, {
    method: "POST",
    headers: {
      ...init?.headers,
      ...headers,
    },
    ...init,
  });
};
