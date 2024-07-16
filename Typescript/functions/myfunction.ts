function addTwo(num:number){
    return num+2;
}

function getUpper(val:string){
    return val.toLowerCase();
}
addTwo(5)
getUpper("nitiN") 

// let login= (name:string,email:string,isPaid:boolean)=>{
    
// }

function f(num:string  ):string{
    // return 2;that creates problem thats why we use this :string to give that what we return
    return"OK";
}
const fun=(str:string):string=>{
    // return 2;that creates problem thats why we use this :string to give that what we return
    return "ok";
}

const heros=["thor","spiderman","ironman"]

heros.map(hero=>{
    return `hero is ${hero}`
})

function handleError(errmsg:string):void{
    console.log(errmsg);
}

function fail(msg: string): never {
    throw new Error(msg);
  }
export {}