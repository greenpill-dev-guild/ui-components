// FancyButton.stories.ts
import * as React from "react";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Root as FancyButton, Icon as FancyButtonIcon } from './Base';
import { buttonVariants } from '../Button/Base';

import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine, RiDeleteBin6Fill, RiImageFill, RiLoopLeftLine, RiPlantFill } from "@remixicon/react";
import { Root, Icon } from './Base';


const meta: Meta<typeof FancyButton> = {
    title: 'Action/FancyButton', // Adjust to your preferred Storybook group/title
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
        children: 'Next',
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
    render: (args) => (
        <Root disabled={args.disabled} variant={args.variant} size={args.size}>
            {/* <Icon as={RiImageFill}/> */}
            {args.children}
            <Icon as={RiArrowRightSLine} />
        </Root>
    )

};

export const PrimaryAction: Story = {
    args: {
        children: 'Go Garden',
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
    render: (args) => (
        <Root disabled={args.disabled} variant={args.variant} size={args.size}>
            <Icon as={RiPlantFill} />
            {args.children}
            {/* <Icon as={RiPlantFill} /> */}
        </Root>
    )

};

export const UploadImage: Story = {
    args: {
        children: 'Upload Image',
        variant: 'basic',
        size: 'medium',
    },
    parameters: {
        docs: {
            description: 'The success button variant with filled mode.',
        },
    },
    render: (args) => (
        <Root disabled={args.disabled} variant={args.variant} size={args.size}>
            <Icon as={RiImageFill} color="text-green-600"/>
            {args.children}
            {/* <Icon as={RiArrowRightSLine} /> */}
        </Root>
    )
};

export const PrimaryInactiveLargePill: Story = {
    args: {
        // primaryInactiveLargePill
        children: 'Review Work',
        variant: 'primary',
        size: 'medium',
    },
    parameters: {
        docs: {
            description: 'The danger button variant with filled mode.',
        },
    },
    render: (args) => (
        <Root disabled variant={args.variant} size={args.size}>
            {/* <Icon as={RiArrowRightSLine} /> */}
            {args.children}
            <Icon as={RiArrowRightSLine} />
        </Root>

    )

};

export const DestructiveMedium: Story = {
    args: {
        // dangerOutlineLargePill
        children: 'Reject',
        variant: 'destructive',
        size: 'medium',
    },
    parameters: {
        docs: {
            description: 'The button in small size.',
        },
    },
    render: (args) => (
        <Root disabled={args.disabled} variant={args.variant} size={args.size}>
            <Icon as={RiDeleteBin6Fill} />
            {args.children}
            <Icon as={RiArrowRightSLine} />
        </Root>
    )
};

export const SecondaryOutlineSmallRounded: Story = {
    args: {
        // secondaryOutlineSmallRounded
        children: 'Cancel',
        variant: 'basic',
        // mode: 'stroke',
        size: 'small',
    },
    parameters: {
        docs: {
            description: 'The outline button variant.',
        },
    },
};

export const XsPrimary: Story = {
    args: {
        // secondaryOutlineSmallRounded
        children: 'View Details',
        variant: 'primary',
        // mode: 'stroke',
        size: 'xsmall',
    },
    parameters: {
        docs: {
            description: 'The outline button variant.',
        },
    },
};


/**
 *
 * Default Variants
 * - variant: neutral
 * - size: medium
 * 
 * Type <> Variant
 * Style <> State <> Mode
 * Size <> Size
 * 
 * 
 * 
*/
