// FancyButton.stories.ts

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Root as FancyButton } from './Base';

const meta: Meta<typeof FancyButton> = {
    title: 'Components/FancyButton', // Adjust to your preferred Storybook group/title
    component: FancyButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile FancyButton component with multiple variants and sizes.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' }, // or fn() if you prefer
        children: {
            control: 'text',
            description: 'Button content',
        },
        variant: {
            control: { type: 'select' },
            options: ['neutral', 'primary', 'destructive', 'basic'],
            description: 'Visual style of the button',
        },
        size: {
            control: { type: 'select' },
            options: ['medium', 'small', 'xsmall'],
            description: 'Size of the button',
        },
    },
} satisfies Meta<typeof FancyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary FancyButton Story
 */
export const Primary: Story = {
    args: {
        children: 'Fancy Button',
        variant: 'primary',
        size: 'medium',
    },
    parameters: {
        docs: {
            description: {
                story: 'The FancyButton in its primary variant.',
            },
        },
    },
};
