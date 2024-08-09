import { withIronSessionApiRoute } from "iron-session/next";
import sessionOptions from "../../config/session"
import db from '../../db'

export default withIronSessionApiRoute (
    async function handler (req, res) {
        const user = req.session.user
        if (!user) {
            return res.status(401). json({error: "must be logged in"})
        }
        switch(req.method) {
            case 'POST':
                const addExercise = await db.exercise.add(user.id, req.body)
                if (!addExercise) {
                    req.session.destroy()
                    return res.status(401).end()
                }
                return res.status(200).json({exercise: addExercise})
            case 'DELETE':
                const deleteExercise = await db.exercise.remove(user.id, req.body.id)
                if (!deleteExercise) {
                    req.session.destroy()
                    return res.status(401).end()
                }
                return res.status(200).json({exercise: deleteExercise})
            default:
                return res.status(404).end()
        }
    },
    sessionOptions
)