export type Client = {
    id: number;
    name: string;
    email: string;
    website: string;
    phone: string;
    address?: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  };
  