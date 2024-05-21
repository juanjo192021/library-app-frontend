import { User } from "./user.interface";

export interface LoginResponse {
  usuario:        User;
  accessToken: string;
}


