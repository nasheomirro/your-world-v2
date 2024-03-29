import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  message?: string;
} & ComponentPropsWithoutRef<"span">;

const FormFieldError = forwardRef<HTMLSpanElement, Props>(
  ({ className, message, ...props }, ref) => {
    return (
      <span
        className={twMerge("font-sans text-sm mt-1 text-highlight-error", className)}
        ref={ref}
        {...props}
      >
        {message}
      </span>
    );
  },
);

export default FormFieldError;
