import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log('Mongodb connected successfully')
        })

        connection.on('error', (err: string)=>{
            console.log('Mongodb connection eerror . pleasde make sure  mongodb is runig '+ err)
        })
    } catch (error) {
        console.log('Something goes wrong')
        console.log(error)
    }
}