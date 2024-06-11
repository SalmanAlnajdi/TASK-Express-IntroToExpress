const  mongoose  = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(`mongodb+srv://SalmanAlnajdi:QmX8JFHIrSmhSHDn@salman.vgczxqf.mongodb.net/`)
        console.log("Connected to DB")
    }catch(error){
        console.log("Error connecting to DB", error)
    }
}

module.exports = connectDB;