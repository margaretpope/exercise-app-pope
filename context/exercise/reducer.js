import * as actions from './actions'

export default function reducer(state, {action, payload}) {
    switch(action) {
        case actions.SEARCH_EXERCISES:
            return {...state, searchResults: payload}
        default:
            return state
    }
}