import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';

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

export const Primary: Story = {
    args: {
        // primaryFilledLargePill
        label: 'Button',
        variant: 'primary',
        mode: 'filled',
        size: 'large',
    },
    parameters: {
        docs: {
            description: 'The primary button variant with filled mode.',
        },
    },
};

export const Secondary: Story = {
    args: {
        // primaryFilledSmallRounded
        label: 'Button',
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

export const Success: Story = {
    args: {
        // secondaryOutlineLargePill
        label: 'Button',
        variant: 'secondary',
        mode: 'outline',
        size: 'large',
    },
    parameters: {
        docs: {
            description: 'The success button variant with filled mode.',
        },
    },
};

export const Danger: Story = {
    args: {
        // primaryInactiveLargePill
        label: 'Button',
        variant: 'primary',
        mode: 'inactive',
        size: 'large',
    },
    parameters: {
        docs: {
            description: 'The danger button variant with filled mode.',
        },
    },
};

export const Outline: Story = {
    args: {
        // secondaryOutlineSmallRounded
        label: 'Button',
        variant: 'secondary',
        mode: 'outline',
        size: 'small',
    },
    parameters: {
        docs: {
            description: 'The outline button variant.',
        },
    },
};

export const Small: Story = {
    args: {
        // dangerOutlineLargePill
        label: 'Button',
        variant: 'danger',
        mode: 'outline',
        size: 'large',
    },
    parameters: {
        docs: {
            description: 'The button in small size.',
        },
    },
};

export const Large: Story = {
    args: {
        // dangerFilledSmallRounded
        label: 'Button',
        variant: 'danger',
        mode: 'filled',
        size: 'small',
    },
    parameters: {
        docs: {
            description: 'The button in large size.',
        },
    },
};

export const Disabled: Story = {
    args: {
        // primaryFilledSmallRounded
        label: 'Button',
        variant: 'primary',
        mode: 'filled',
        size: 'small',
        disabled: true,
    },
    parameters: {
        docs: {
            description: 'The disabled state of the button.',
        },
    },
};

export const Loading: Story = {
    args: {
        label: 'Loading',
        variant: 'primary',
        mode: 'filled',
        size: 'medium',
        loading: true,
    },
    parameters: {
        docs: {
            description: 'The loading state of the button.',
        },
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Icon',
        variant: 'primary',
        mode: 'filled',
        size: 'medium',
        startDecorator: '🚀',
    },
    parameters: {
        docs: {
            description: 'The button with an icon.',
        },
    },
};
