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
    settingsError:string
    addOne: () => void
    resetValue: () => void
}

export const Counter: React.FC<CounterPropsType> = ({count, minMax, countError, addOne, resetValue,settingsError}: CounterPropsType) => {
    return (
        <s.StyledContainer>
            <Display count = {count}
                     minMax = {minMax}
                     error = {countError}
                     settingsError={settingsError}
            />
            <Progressbar fill = {(100 * (count - minMax[0])) / (minMax[1] - minMax[0])}/>
            <Controllers>
                <Button
                    title = "Inc"
                    onClick = {addOne}
                    disabled = {count === minMax[1]}/>
                <Button
                    title = "Reset"
                    onClick = {resetValue}
                    disabled = {count === minMax[0]}/>
            </Controllers>
        </s.StyledContainer>)
}
