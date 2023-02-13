export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  company: {
    name: string;
    bs: string;
    catchPhrase: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
