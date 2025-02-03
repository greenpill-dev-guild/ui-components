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

export const RejectButton: Story = {
    args: {
        // dangerFilledSmallRounded
        children: 'Reject',
        variant: 'error',
        mode: 'stroke',
        size: 'small',
    },
    parameters: {
        docs: {
            description: 'The button in large size.',
        },
    },
    // render: (args) => (
    //     <Root disabled={args.disabled} variant={args.variant} size={args.size}>
    //         <Icon as={RiImageFill} />
    //         {args.children}
    //         <Icon as={RiArrowRightSLine} />
    //     </Root>
    // )
};

export const DangerFilledSmallRounded: Story = {
    args: {
        // dangerFilledSmallRounded
        children: 'Cancel',
        variant: 'neutral',
        mode: 'stroke',
        size: 'small',
    },
    parameters: {
        docs: {
            description: 'The button in large size.',
        },
    },
};
