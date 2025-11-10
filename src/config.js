// config.js
// export const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "");


//  http://localhost:1000

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";
