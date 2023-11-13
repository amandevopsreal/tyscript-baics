/*const User = {
    name: 'aman',
    email: "aman@lco.dev",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) {
}
let newUser = { name: "aman", isPaid: false, email: "h@h.com" }



createUser(newUser)

function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 }
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

type Mystring = string

function createUser(user: User) {
    return { name: "", email: "", isActive: true }
}

createUser({ name: "", email: "", isActive: true })*/

type User = {
    readonly _id: string,
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "a",
    email: "a@m.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "aman@gmail.com"
//myUser._id="asa"