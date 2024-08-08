import {Schema} from 'mongoose'

const exerciseSchema = new Schema({
    name: String,
    type: String,
    equipment: String,
    difficulty: String,
    instructions: String,
})

export default exerciseSchema