import { UP, DOW } from './Types'

const defaultState = { value: 0 }
const Reducer = (state = defaultState, action) => {
    if (action.type === UP) {
        return { value: state.value + 1 }
    }
    if (action.type === DOW) {
        return { value: state.value - 1 }
    }
    return state
}

export default Reducer