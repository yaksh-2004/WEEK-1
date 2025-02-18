const isPhonestore = true;
const isAvailable = true;

function processMessage()
{
    return new Promise((resolve,reject)=>{
       if(!isPhonestore)
       {
         reject({
            name:"Wrong Store",
            message:"This is a cloth store"
         })
       }

       else if(!isAvailable)
       {
          reject({
            name:"out of the stock",
            message:"Sorry for the inconvinince, This model is currently unavailable..."
          })
       }
       else{
         resolve({
            name:"ok",
            message:"This model is available.."
         })
       }
    })
}
processMessage()
.then(response=>console.log(response))
.catch(reject=>console.log(reject));