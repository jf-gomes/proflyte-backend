import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ""
    },
    about: {
        type: String,
        default: "Sem descrição."
    },
    posts: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Users', userSchema)