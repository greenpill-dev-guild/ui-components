import * as React from 'react';
import { Slottable } from '@radix-ui/react-slot';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  type RemixiconComponentType,
} from '@remixicon/react';
 
import * as ButtonPrimitives from '@/components/ui/button';
 
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ButtonPrimitives.Root> & {
    leadingIcon?: RemixiconComponentType;
    trailingIcon?: RemixiconComponentType;
  }
>(
  (
    { children, leadingIcon: LeadingIcon, trailingIcon: TrailingIcon, ...rest },
    forwardedRef,
  ) => {
    return (
      <ButtonPrimitives.Root ref={forwardedRef} {...rest}>
        {LeadingIcon && <ButtonPrimitives.Icon as={LeadingIcon} />}
        <Slottable>{children}</Slottable>
        {TrailingIcon && <ButtonPrimitives.Icon as={TrailingIcon} />}
      </ButtonPrimitives.Root>
    );
  },
);
Button.displayName = 'Button';