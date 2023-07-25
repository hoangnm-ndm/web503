import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { versionKey: false, timestamps: true})

export default mongoose.model('User', userSchema)