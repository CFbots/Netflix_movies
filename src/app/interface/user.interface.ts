export interface UserSignIn {
    email:string, 
    password:string
}

export interface AuthResponse {
    accessToken: string,
    role: string
}

export class UserRegister {
    "username": string = '';
    "password": string = '';
    "email": string = '';
    "role": string = '';
    "tmdb_key": string = '';
}

export interface UserInfo {
    "username"?: string,
    "password"?: string,
    "email"?: string,
    "role"?: string,
    "tmdb_key"?: string,
}

export enum UserRole {
    USER = 'USER',
    SUPERUSER = 'SUPERUSER',
    ADMIN = 'ADMIN',
}

export class AppUserAuth {
    id?: string;
    username?: string;
    email?: string;
    role?: string;
    tmdb_key?: string;
    jwtToken?: string;
}