//aync handler using promises 
//first method 

const asynchandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncH andler}

//Ways to write function in function in arrow function
// const asyncHandler=()=>{}
// constasyncHandler=(func)=>()=>{}
// constasyncHandler=(func)=>async () =>{}


//Make a wrapper function for async handler
//second method
const asyncHandler=(fn)=> async (req,res,next)=>{
    try {
        await fn(req,res,next);
    } catch (error) {
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
        
    }
}