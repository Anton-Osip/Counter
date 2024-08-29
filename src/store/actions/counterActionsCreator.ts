export const incrementCountAC = () => ({
    type: 'INCREMENT-COUNT',
}) as const;
export const resetCountAC = () => ({
    type: 'RESET-COUNT',
}) as const;
export const setCounterErrorAC = (newError: string[]) => ({
    type: 'SET-COUNTER-ERROR', newError
}) as const;
export const setSettingsErrorAC = (newError: string) => ({
    type: 'SET-SETTINGS-ERROR', newError
}) as const;
export const setMinMaxAC = (minMax: number[]) => ({
    type: 'SET-MIN-MAX', minMax
}) as const;
