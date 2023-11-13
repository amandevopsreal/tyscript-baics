interface User {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string
    //setTrial:()=>string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const aman: Admin = {
    dbId: 22, email: "a@m.com", userId: 2211, githubToken: "github",
    role: "admin", startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "aman10", off: 10) => {
        return 2
    }
}