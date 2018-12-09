import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const users = [
        { id: 11, name: 'Adyasha' , password: '1234', phoneNo: 123456},
        { id: 12, name: 'Devidatta' , password: '12345', phoneNo: 1234567}
      ];
      return {users};
    }
  }
