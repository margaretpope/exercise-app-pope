import User from '../models/user'
import { dbConnect } from './connection'

export async function getAllExercises(userId) {
    await dbConnect()
    const user = await User.findById(user.id).lean()
    if (!user) return null
    return user.savedExercises.map(exercise => normalizeId(exercise))
}

export async function add(userId, exercise) {
    await dbConnect()
    const user = await User.findByIdAndUpdate (
        userId,
        { $addToSet: {savedExercises: exercise}},
        { new: true}
    )
    if (!user) return null
}

export async function remove(userId, exerciseId) {
    await dbConnect()
    const user = await User.findByIdAndUpdate(
        userId,
        { $pull: { savedExercises: { _id: exerciseId } } },
        { new: true }
    )
    if (!user) return null
    return true
}