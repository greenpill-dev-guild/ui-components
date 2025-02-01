// button.base.tsx
import * as React from "react";
import { tv, type VariantProps } from "../../utils/tv";
import type { PolymorphicComponentProps } from "../../utils/polymorphic";

export const buttonVariants = tv({
  // A common base class if needed (here we ensure we always have a flex container)
  base: "flex items-center",
  variants: {
    variant: {
      primary: "",
      secondary: "",
      danger: "",
    },
    mode: {
      filled: "",
      outline: "border border-gray-300 text-gray-700",
      inactive: " bg-gray-200 text-gray-400 cursor-not-allowed",
    },
    size: {
      large: "px-6 py-2 rounded-full",
      small: "px-4 py-1 rounded",
    },
  },
  compoundVariants: [
    { // primaryFilledLargePill
      variant: "primary",
      mode: "filled",
      size: "large",
      class: "bg-green-500 text-white ",
    },
    { // primaryFilledSmallRounded
      variant: "primary",
      mode: "filled",
      size: "small",
      class: "bg-green-500 text-white",
    },
    { // secondaryOutlineLargePill
      variant: "secondary",
      mode: "outline",
      size: "large",
      class: " ",
    },
    { // primaryInactiveLargePill
      variant: "primary",
      mode: "inactive",
      size: "large",
      class: " cursor-not-allowed",
    },
    { // secondaryOutlineSmallRounded
      variant: "secondary",
      mode: "outline",
      size: "small",
      class: "",
    },
    { // dangerOutlineLargePill
      variant: "danger",
      mode: "outline",
      size: "large",
      class: "border border-red-500 text-red-500  hover:bg-red-50 active:translate-y-[1px]",
    },
    { // dangerFilledSmallRounded
      variant: "danger",
      mode: "filled",
      size: "small",
      class: "bg-red-500 text-white",
    },
    { // primaryFilledSmallRounded
      variant: "primary",
      mode: "filled",
      size: "small",
      class: "bg-green-500 text-white px-3 py-1",
    },
  ],
  defaultVariants: {
    variant: "primary",
    mode: "filled",
    size: "large",
  },
});

// Type for the props that our tv function understands
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

// The low-level Button root component.
export type ButtonRootProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps & {
    asChild?: boolean;
  };

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonRootProps>(
  (
    { children, asChild, className, variant, mode, size, ...rest },
    ref,
  ) => {
    const Component = asChild ? "div" : "button";
    const classes = buttonVariants({ variant, mode, size, class: className });
    return (
      <Component ref={ref} className={classes} {...rest}>
        {children}
      </Component>
    );
  },
);
ButtonRoot.displayName = "ButtonRoot";

// Optional: a ButtonIcon component if you need icon styling.
function ButtonIcon<T extends React.ElementType>({
  as,
  className,
  ...rest
}: PolymorphicComponentProps<T, {}>) {
  const Component = as || "span";
  return <Component className={className} {...rest} />;
}
ButtonIcon.displayName = "ButtonIcon";

export { ButtonRoot as Root, ButtonIcon as Icon };