import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        //mongoose
        const mongoURL = 'mongodb+srv://juanih1990:963258527415963@clustercursobackend.ddoeaet.mongodb.net/'
        const mongoDBName = 'tutorial'
        await mongoose.connect(mongoURL, { dbName: mongoDBName })
        console.log("conexion exitosa")
    } catch (error) {
        console.log(error)
    }
}



