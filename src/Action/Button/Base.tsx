// AlignUI Button v0.0.0

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import type { PolymorphicComponentProps } from "../../utils/polymorphic";
import { recursiveCloneChildren } from "../../utils/recursive-clone-children";
import { tv, type VariantProps } from "../../utils/tv";

const BUTTON_ROOT_NAME = "ButtonRoot";
const BUTTON_ICON_NAME = "ButtonIcon";

export const buttonVariants = tv({
  slots: {
    root: [
      // base
      "inline-flex items-center justify-center whitespace-nowrap rounded-lg transition duration-200 ease-out",
    ],
    icon: [
      // base
      "flex size-5 shrink-0 items-center justify-center",
    ],
  },
  variants: {
    variant: {
      primary: {
        root: [
          //base
          "bg-gradient-to-b from-green-600 to-green-700 text-white"
        ]
      },
      secondary: {
        root: [
          //base
          "px-6 py-3 border border-gray-300 text-gray-700",
        ]
      },
      danger: {
        root: [
          //base
          "border border-red-500 text-red-500 hover:bg-red-50 active:translate-y-[1px]",

        ]
      },
    },
    mode: {
      filled: {},
      outline: {
        // root: "ring-1 ring-inset",
      },
      inactive: {
        // root: "ring-1 ring-inset",
      }
    },
    size: {
      small: {
        root: "rounded-10 h-8 gap-2.5 px-2.5 text-label-sm",
        icon: "-mx-1",
      },
      medium: {
        root: "rounded-10 h-10 gap-3 px-3.5 text-label-sm",
        icon: "-mx-1",
      },
      large: {
        root: "h-9 gap-3 rounded-full px-3 text-label-sm",
        icon: "-mx-1",
      },
    },
  },
  compoundVariants: [
    // Primary variant configurations
    {
      variant: "primary",
      mode: "filled",
      size: "large",
      class: {
        root: [
          "px-6 py-3 bg-green-600 text-white hover:bg-green-700 active:translate-y-[1px]",
        ],
      },
    },
    {
      variant: "primary",
      mode: "filled",
      size: "small",
      class: {
        root: [
          "px-3 py-2 bg-green-600 text-white hover:bg-green-700 active:translate-y-[1px]",
        ],
      },
    },
    // Secondary variant configurations
    {
      variant: "secondary",
      mode: "outline",
      size: "large",
      class: {
        root: [
          "px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 active:translate-y-[1px]",
        ],
      },
    },
    //Danger variant configurations
    {
      variant: "danger",
      mode: "outline",
      size: "large",
      class: {
        root: [
          "px-6 py-3 border border-red-500 text-red-500",
        ],
      },
    },
    {
      variant: "danger",
      mode: "filled",
      size: "small",
      class: {
        root: [
          "px-3 py-2 bg-red-600 text-white",
        ],
      },
    },
    // Inactive state
    {
      variant: "primary",
      mode: "inactive",
      size: "large",
      class: {
        root: [
          "px-6 py-3 bg-gray-100 text-gray-400 cursor-not-allowed",
        ],
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    mode: "filled",
    size: "medium",
  },
});

type ButtonSharedProps = VariantProps<typeof buttonVariants>;

type ButtonRootProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  (
    { children, variant, mode, size, asChild, className, ...rest },
    forwardedRef,
  ) => {
    const uniqueId = React.useId();
    const Component = asChild ? Slot : "button";
    const { root } = buttonVariants({ variant, mode, size });

    const sharedProps: ButtonSharedProps = {
      variant,
      mode,
      size,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [BUTTON_ICON_NAME],
      uniqueId,
      asChild,
    );

    return (
      <Component
        ref={forwardedRef}
        className={root({ class: className })}
        {...rest}
      >
        {extendedChildren}
      </Component>
    );
  },
);
ButtonRoot.displayName = BUTTON_ROOT_NAME;

function ButtonIcon<T extends React.ElementType>({
  variant,
  mode,
  size,
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T, ButtonSharedProps>) {
  const Component = as || "div";
  const { icon } = buttonVariants({ mode, variant, size });

  return <Component className={icon({ class: className })} {...rest} />;
}
ButtonIcon.displayName = BUTTON_ICON_NAME;

export { ButtonRoot as Root, ButtonIcon as Icon };