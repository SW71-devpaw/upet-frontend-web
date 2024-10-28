// schemas/VeterinarianSchemaPost.ts
export interface VeterinarianSchemaPost {
  clinicName: string;
  otp_password: string;
}

// schemas/VeterinarianUpdateInformation.ts
export interface VeterinarianUpdateInformation {
  name: string;
  description?: string;
  experience?: number;
}

// schemas/VeterinarianSchemaGet.ts
export interface VeterinarianSchemaGet {
  id: number;
  name: string;
  clinicId: number;
  image_url: string;
  description?: string;
  experience?: number;
  user_id: number;
}

// schemas/VeterinarianProfileSchemaGet.ts
export interface VeterinarianProfileSchemaGet {
  id: number;
  name: string;
  image_url: string;
  description?: string;
  experience?: number;
  clinicName: string;
  workingHourStart: string; // Cambiar a un tipo específico si es necesario
  workingHourEnd: string;   // Cambiar a un tipo específico si es necesario
  clinicAddress: string;
  reviews: ReviewSchemaGet[]; // Asegúrate de definir ReviewSchemaGet
}
