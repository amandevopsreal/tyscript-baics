class User {
    email: string
    name: string
    readonly city: string = "Lucknow"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const aman = new User("a@a.com", "aman");
