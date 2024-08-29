import styled from "styled-components";
import {Button} from "../../button/Button";
import React, {ReactNode} from "react";

type ControllersPropsTYpe = {
    children: ReactNode
}

export const Controllers: React.FC<ControllersPropsTYpe> = (props: ControllersPropsTYpe) => {
    const {children} = props
    return (
        <StyledControllers>
            {children}
        </StyledControllers>
    )
}


export const StyledControllers = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid #06a6b7;
`


