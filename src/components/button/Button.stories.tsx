import type {Meta, StoryObj} from '@storybook/react';
import {Button} from "./Button";
import {action} from '@storybook/addon-actions'
import React, {useState} from "react";

const meta: Meta<typeof Button> = {
    component: Button,

};

export default meta;
type Story = StoryObj<typeof Button>;

export const StoryButton: Story = {
    args: {title: "Button", onClick: action('Clicked')},
}
export const DisabledButton: Story = {
    args: {title: "Button", onClick: action('Clicked'), disabled: true},
}

export const ChangeButton: React.FC = () => {
    const [disabled, setDisabled] = useState<boolean>(false)
    const [title, setTitle] = useState<'true' | 'false'>('false')

    return <> <Button disabled = {disabled} title = {title} onClick = {action('Clicked')}/>
        <button onClick = {() => {
            setDisabled(!disabled)
            setTitle(prevState => prevState === 'true' ? 'false' : 'true')
        }}> Set disabled
        </button>
    </>
}
