import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
    title: 'Action/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
            description: 'The visual style of the button',
        },
        mode: {
            control: 'select',
            options: ['filled', 'outline', 'inactive'],
            description: 'The button mode (filled, outline, or inactive)',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'The size of the button',
        },
        rounded: {
            control: 'select',
            options: ['rounded-lg', 'rounded-full'],
            description: 'Rounded corners style',
        },
    },
    args: {
        variant: 'primary',
        mode: 'filled',
        size: 'small',
        children: 'Button',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Click Me!',
        variant: 'primary',
        mode: 'filled',
        size: 'large',
        rounded: 'rounded-full',
        children: 'Approve',
    },
};

export const Secondary: Story = {
    args: {
        label: 'Click Me!',
        variant: 'secondary',
        mode: 'outline',
        size: 'large',
        rounded: 'rounded-full',
        children: 'Upload media',
    },
};

export const Danger: Story = {
    args: {
        label: 'Click Me!',
        variant: 'danger',
        mode: 'outline',
        size: 'large',
        rounded: 'rounded-full',
        children: 'Reject',
    },
};

export const SmallPrimary: Story = {
    args: {
        label: 'Click Me!',
        variant: 'primary',
        mode: 'filled',
        size: 'small',
        children: 'OK',
    },
};

export const Inactive: Story = {
    args: {
        label: 'Click Me!',
        variant: 'primary',
        mode: 'inactive',
        size: 'large',
        rounded: 'rounded-full',
        children: 'Next',
    },
};

export const Playground: Story = {
    args: {
        label: 'Click Me!',
        variant: 'primary',
        mode: 'filled',
        size: 'small',
        rounded: 'rounded-lg',
        children: 'Button',
    },
};
