// Interface para crear un nuevo dueño de mascota
export interface PetOwnerSchemaPost {
    numberPhone: string;
    location: string;
  }
  
  // Interface para actualizar información del dueño de mascota
  export interface PetOwnerUpdateInformation {
    numberPhone: string;
    location: string;
    name: string;
  }
  
  // Interface para obtener información del dueño de mascota
  export interface PetOwnerSchemaGet {
    id: number;
    name: string;
    numberPhone: string;
    image_url: string;
    location: string;
    subscriptionType: SubscriptionType;
  }
  
  // Ejemplo de definición de un enum para SubscriptionType, ajusta según sea necesario
  export enum SubscriptionType {
    FREE = 'FREE',
    PREMIUM = 'PREMIUM',
    VIP = 'VIP'
  }
  