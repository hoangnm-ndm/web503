import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: String
}, {
    versionKey: false, timestamps: true,
})

export default mongoose.model('Product', productSchema)