const  mongoose = require("mongoose")
// connection creation and creatin a new db

mongoose.connect('mongodb://localhost:27017/mayank',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>console.log("connection succesful...."))
  .catch((err=>console.log(err)));
  // schema defines the structure of document default value ,validators etc/.
  const dataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    live:Boolean,
    date:{type:Date,default:Date.now}
  })
  // A Mongoose model is a wrapper on the Mongoose schema.
  //  A Mongoose schema defines the structure of the document, 
  // default values, validators, etc., whereas a Mongoose model provides an 
  // interface to the database for creating, querying, updating, deleting records, etc
  // collection creation
  const Data=new mongoose.model("Data",dataSchema)
  const createDocument=async()=>{
try{
  
  // Insert a document
  const data_storing=new Data({
    name:"chotu",
    age:23,  
    live:true,
  

  
  })
  const learning=new Data({
    name:"express",
    age:52,
    live:true,
  

  
  })
  const bf=new Data({
    name:"ghochu",
    age:1,
    live:true,
  

  
  })
 
  
  const result=await Data.insertMany([data_storing,learning,bf]);
  console.log(result)
}catch(err){
  console.log(err);
}
  }
  // createDocument();

  const getDocument=async  () =>{
    // for all data
   try{
      const result=await Data.find()
        
    console.log(result)
  }catch(err){
    console.log(err);
  }

 }
//  get the document
 // getDocument();

//  update the document
 const updateDocument=async (_id) =>{
   try{
    const result=await Data.findByIdAndUpdate({_id},{
      $set :{
        name:"rhapa"
      }
  
   },{
     useFindAndModify:false
  });
   console.log(result)

   }
   catch(err){
     console.log(err);

   }
  }
  
//  updateDocument("61c2a67bd3a7f18fd2386d23")
// delete the document
const deleteDocument=async (_id)=>{
  try{
    // const result=await Data.deleteOne({_id})
        const result=await Data.findByIdAndDelete({_id});

    console.log(result)

  }catch(err){
    console.log(err);
  }
  

}
deleteDocument("61c2a67bd3a7f18fd2386d25")



      // .find()
      // .select({name:"ghochu"})
      // .limit(1)
    // for particular data
    // limit for only one data
    // const result=await Data.find({name:"ghochu"}).limit(1)
// using operator and find data
    // .find({age:{$gt:2}})
    // .select({name:1})

  

