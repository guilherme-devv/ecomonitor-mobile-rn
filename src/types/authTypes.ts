export interface AuthResponse {
  access: string;
  refresh: string;
  user?: { id: number };
}

export interface ErrorResponse {
  detail: string;
}
