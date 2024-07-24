//Define type aliases
type user={
    readonly _id:string,
    name:string,
    email:string,
    isAva:boolean,
    card?:string//optional mode need not to redefine
}
//now store values on a variable

let myUser:user={
    _id:"1234",
    name:"nitin",
    email:"n@gmail.com",
    isAva:true,
    
}

myUser.name="Tanvi"
//cannot redefine value to because it is in readmode only
// myUser._id="11"

type cardNumber={
    cardnumber:string
}

type cardDate={
    cardDate:string
}
type cardDetails=cardNumber & cardDate &{
    cvv:number
}