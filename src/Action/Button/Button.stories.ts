import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Root as Button, Icon } from './Base';

const meta: Meta<typeof Button> = {
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: 'A versatile button component with multiple variants and states.',
        },
    },
    tags: ['autodocs'],
    argTypes: {
        onClick: fn(),
        label: 'Button',
        variant: {
            control: {
                type: 'select',
            },
            options: ['primary', 'secondary', 'danger'],
        },
        mode: {
            control: {
                type: 'select',
            },
            options: ['filled', 'outline', 'inactive'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ApplyButton: Story = {
    args: {
        // primaryFilledSmallRounded
        children: 'Apply',
        variant: 'primary',
        mode: 'filled',
        size: 'small',
    },
    parameters: {
        docs: {
            description: 'The secondary button variant with stroke mode.',
        },
    },
};

export const DangerFilledSmallRounded: Story = {
    args: {
        // dangerFilledSmallRounded
        children: 'Cancel',
        variant: 'error',
        mode: 'filled',
        size: 'small',
    },
    parameters: {
        docs: {
            description: 'The button in large size.',
        },
    },
};

export const Loading: Story = {
    args: {
        children: 'Loading',
        variant: 'primary',
        mode: 'filled',
        size: 'medium',
        // loading: true,
    },
    parameters: {
        docs: {
            description: 'The loading state of the button.',
        },
    },
};
};
