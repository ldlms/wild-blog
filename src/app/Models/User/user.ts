import { Address } from "./address";

export class User {

    username: string
    email: string
    password: string
    address: Address

    constructor(username: string, email: string, password: string, address: Address) {
        this.username = username
        this.email = email
        this.password = password
        this.address = address
    }
}
