import styled from "styled-components";
import React from "react";

type ScoreboardPropsTYpe = { error: string[], count: number, minMax: number[], settingsError: string }

export const Display: React.FC<ScoreboardPropsTYpe> = ({error, count, minMax, settingsError}: ScoreboardPropsTYpe) => {

    const displayOutput = settingsError === '' ?
        (
            (error[0].length !== 0 || error[1].length !== 0) ?
                <Value isMax = {true}>{error}</Value> :
                <Value isMax = {minMax[1] === count}>{count}</Value>
        ) : <Value isMax>{settingsError}</Value>

    return (
        <StyledScoreboard>
            {displayOutput}
        </StyledScoreboard>
    )
}


export const StyledScoreboard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #06a6b7;
    border-radius: 9px;
    margin-bottom: 25px;
`
export const Value = styled.p<{ isMax: boolean }>`
    font-size: 54px;
    font-weight: 700;
    color: ${props => props.isMax ? 'red' : '#2f2f2f'};
`
