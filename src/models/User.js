import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.password
    }
})

userSchema.methods.generateHash = async function (password) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.methods.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export default model('User', userSchema)