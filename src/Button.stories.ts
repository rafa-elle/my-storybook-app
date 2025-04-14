import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { within } from '@storybook/test';
import { userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        label: 'Click Me',
        onClick: () => alert('Button clicked!'),
    },
};
export const DisableClickSim: Story = {
    args: {
        label: 'Simula Click',
        onClick: async () => {
            await new Promise((resolve) => setTimeout(resolve, 0));
        },
        autoDisable: true,
    },
};

export const WithInteraction: Story = {
    args: {
        label: 'Click Me',
        autoDisable: true,
        onClick: async () => { },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: /click me/i });

        await userEvent.click(button);
    },
};