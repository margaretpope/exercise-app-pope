import {useContext, createContext, useReducer} from "react"
import initialState from './state'
import reducer from './reducer'

export const exerciseContext = createContext()

export const useExerciseContext = () => {
    const context = useContext(exerciseContext)
    if (context === undefined)
        throw new Error('error')
    return context
}

export const ExerciseProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <exerciseContext.Provider {...props} value = {[state, dispatch]}/>
}