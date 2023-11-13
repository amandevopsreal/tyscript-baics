function addTwo(num: number) {

    //return num + 2
    return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = true) => { }

let value = addTwo(5)
getUpper("hitesh")

signUpUser("aman", "aman@gmail.com", false)
loginUser("h", "h@h.com")

function addTwo(num: number): number {
    return "hello"
}
//function getValue(myVal: number): boolean {
//    if (myVal > 5) {
//       return true
//    }
//    return "200 OK"
//}

const getHello = (s: string): string => {
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
//const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);

}
function handleError(errmsg: string): never {
    throw new Error(errmsg);

}
export { }