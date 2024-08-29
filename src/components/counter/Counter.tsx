import React from "react";
import {s} from "../StyledContainer";
import {Display} from "./display/Display";
import {Progressbar} from "./progressbar/Progressbar";
import {Controllers} from "./controllers/Controllers";
import {Button} from "../button/Button";

type CounterPropsType = {
    count: number
    minMax: number[]
    countError: string[]
    settingsError: string
    addOne: () => void
    resetCount: () => void
}

export const Counter: React.FC<CounterPropsType> = (props: CounterPropsType) => {
    const {
        count, minMax, countError, addOne, resetCount, settingsError
    } = props

    const isIncButtonDisabled = count === minMax[1] || settingsError !== ''
    const isResetButtonDisabled = count === minMax[0] || settingsError !== ''
    const progressbarFill = (100 * (count - minMax[0])) / (minMax[1] - minMax[0])

    return (
        <s.StyledContainer>
            <Display count = {count}
                     minMax = {minMax}
                     error = {countError}
                     settingsError = {settingsError}
            />
            <Progressbar fill = {progressbarFill}/>
            <Controllers>
                <Button
                    title = "Inc"
                    onClick = {addOne}
                    disabled = {isIncButtonDisabled}/>
                <Button
                    title = "Reset"
                    onClick = {resetCount}
                    disabled = {isResetButtonDisabled}/>
            </Controllers>
        </s.StyledContainer>)
}
