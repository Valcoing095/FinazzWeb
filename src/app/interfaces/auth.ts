export interface Register {
    FullName : string;
    Age : string;
    Email : string;
    Password : string
}

export interface Login {
  password:  string;
  email:  string;
}

export interface Token {
  Email: any;
  token: string;
}
