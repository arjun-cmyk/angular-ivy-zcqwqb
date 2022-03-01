
export class User {  
  password: string;
  cPassword: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
