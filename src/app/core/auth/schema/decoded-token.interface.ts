export interface DecodedToken {
    sub: string;       // Email
    user_id: number;  // ID del usuario
    user_role: string; // Rol del usuario
    registered: boolean; // Estado de registro
    exp: number;      // Expiración del token
  }