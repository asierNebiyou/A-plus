import {Nitro}  from 'nitropack'
import mongoose from 'mongoose'
export default async(_nitroApp:Nitro)=>{
    const config=useRuntimeConfig();
    try{
    await mongoose.connect(config.mongodburi)
    console.log('Database is connected.')
    }catch(e){
        console.log('error:',e)
    }
}