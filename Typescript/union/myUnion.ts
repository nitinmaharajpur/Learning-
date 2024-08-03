let score: number | string = 33

score = 44
score = "55"
//In union we can define datatype when we dont know the actual datatype

type Us = {
    name: string
    id: number
}
type Admin = {
    name: string
    id: number
}

let nitin: Us | Admin = { name: "Nitin", id: 22 }
function getDbId(id:number| string){
    if(typeof id==="string"){
        id.toLowerCase();
    }

}
// array

const data:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
const data3:string[] | number[]=["1","2","3"]
let seatAllotment:"aisle" | "middle"|"window"

seatAllotment="nitin"//show errors