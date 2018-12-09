export class User {
    constructor(
        public name: string,
        public password: string,
        public phoneNo?: number,
        public email?: string,
        public maritalStatus?: string
    ) {}
}
