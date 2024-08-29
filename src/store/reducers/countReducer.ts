export type CounterStateType = {
    minMax: number[]
    count: number
    countError: string[]
    settingsError: string
}

const initState: CounterStateType = {
    minMax: [0, 5],
    count: 0,
    countError: ['', ''],
    settingsError: ''
};

type InitStateType = typeof initState;
type ActionsType = any;

export const countReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "INCREMENT-COUNT":
            return {...state, count: state.count + 1}
        case "RESET-COUNT":
            return {...state, count: state.minMax[0]}
        case "SET-COUNTER-ERROR":
            return {...state, countError: action.newError}
        case "SET-SETTINGS_ERROR":
            return {...state, settingsError: action.newError}
        case "SET-MIN-MAX":
            return {...state, minMax: action.minMax}
        default:
            return state;
    }
};
