import React, {ChangeEvent, MouseEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {Button} from "../button/Button";
import {useDispatch} from "react-redux";
import {setCounterErrorAC, setMinMaxAC, setSettingsErrorAC} from "../../store/actions/counterActionsCreator";

type SettingsProps = {
    minMax: number[]
    countError: string[]
}


export const Settings: React.FC<SettingsProps> = ({minMax, countError}: SettingsProps) => {
    const [minValue, setMinValue] = useState<number>(minMax[0])
    const [maxValue, setMaxValue] = useState<number>(minMax[1])
    const [disabled, setDisabled] = useState<boolean>(true)
    const dispatch = useDispatch()

    const setMinMaxHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (minValue < 0) {
            dispatch(setCounterErrorAC(['Incorrect Value', '']))
            dispatch(setSettingsErrorAC('Incorrect Value'))
        } else if (maxValue <= minValue) {
            dispatch(setCounterErrorAC(['Incorrect Value', '']))
            dispatch(setSettingsErrorAC('Incorrect Value'))
        } else {
            dispatch(setMinMaxAC([minValue, maxValue]))
            dispatch(setCounterErrorAC(['', '']))
            dispatch(setSettingsErrorAC(''))
        }

    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+e.currentTarget.value)
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    useEffect(() => {
        if (minValue === minMax[0] && maxValue === minMax[1]) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [minValue, maxValue, minMax])
    return (
        <StyledForm>
            <Wrapper>
                <InputWrapper>
                    <Label htmlFor = "min">Start value :</Label>
                    <Input value = {minValue} onChange = {onChangeMinValue} error = {countError[0].length !== 0}
                           type = "number" id = "min"/>
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor = "max">Max value :</Label>
                    <Input value = {maxValue} onChange = {onChangeMaxValue} error = {countError[1].length !== 0}
                           type = "number" id = "max"/>
                </InputWrapper>
            </Wrapper>
            <Button disabled = {disabled} title = {"Set"} onClick = {setMinMaxHandler}/>
        </StyledForm>
    )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    justify-content: space-between;
    padding: 15px;
    border-radius: 5px;
    min-width: 500px;
    border: 2px solid #06a6b7;
    max-width: 45%;
    width: 100%;`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid #06a6b7;
    width: 100%;`

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    width: 100%;
    gap: 25px;
`

const Label = styled.label`
    color: #06a6b7;
    font-size: 44px;
`

const Input = styled.input<{ error: boolean }>`
    border: 2px solid ${props => props.error ? 'red' : '#06a6b7'};
    padding: 5px 15px;
    font-size: 30px;
    outline: none;
    background-color: transparent;
    color: #06a6b7;
    max-width: 250px;
    width: 100%;
    text-align: center;
`
