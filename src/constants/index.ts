export * from "./enum"

// client
export const CLIENT_TOKEN_STORAGE_KEY = "access_token";


// server 
export const LOCAL_IP_HOST = "http://192.168.1.38:8080";
export const LOCAL_SERVER_HOST = "http://localhost:8080";
export const PRODUCTION_SERVER = "";
export const NODE_ENV = process.env.NODE_ENV;
export const HOST = LOCAL_SERVER_HOST;
export const IMAGES_HOST = PRODUCTION_SERVER;

export const API_HOST = `${HOST}`;
