import type {Meta, StoryObj} from '@storybook/react';
import {Progressbar} from "./Progressbar";

const meta: Meta<typeof Progressbar> = {
    component: Progressbar,

};

export default meta;
type Story = StoryObj<typeof Progressbar>;

export const ProgressbarWithStartCount: Story = {
    args: {fill: 0},
}
export const ProgressbarWithFinishCount: Story = {
    args: {fill: 100},
}
export const ProgressbarWith50Count: Story = {
    args: {fill: 50},
}

