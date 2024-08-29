import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions'
import {Display} from "./Display";

const meta: Meta<typeof Display> = {
    component: Display,

};

export default meta;
type Story = StoryObj<typeof Display>;

export const DisplayWithNormCounter: Story = {
    args: {count: 5, minMax: [0, 10]},
}
export const DisplayWithUncorrectableCounter: Story = {
    args: {count: 5, minMax: [0, 5]},
}

