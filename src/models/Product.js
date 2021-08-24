import { Schema, model } from "mongoose"

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    images: {
        url: String
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema)