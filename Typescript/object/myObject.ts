const User={
    name:"Nitin Kumar",
    email:"nitinmaharajpur@gmail.com",
    isActive:true
}


// weird behaviour of typescript
function createUser({name :string,isActive:bool}){}

// createUser({name:"nitin",isActive:false})
//if we add more values then it gives error
// createUser({name:"nitin",isActive:false,email:"nitinmaharajpur@gmail.com"})
// if we use a variable to store and then pass it willnot give any type of error
let m={name:"nitin",isActive:false,email:"nitinmaharajpur@gmail.com"}
createUser(m);//so this a weird situation of ts

//how we return a an object function
function create():{}{
    return {};
}

