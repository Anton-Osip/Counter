import React, {ButtonHTMLAttributes} from "react";
import styled from "styled-components";


export const Button = ({title, onClick, disabled}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return <StyledButton disabled = {disabled} onClick = {onClick}>{title}</StyledButton>
}

export const StyledButton = styled.button`
    padding: 15px 45px;
    font-size: 34px;
    background-color: #06a6b7;
    color: azure;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        background-color: #616161;
        color: #fff;
    }`