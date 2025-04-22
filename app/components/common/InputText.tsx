"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";
import { cn } from "@/lib/clsx";

const InputVariants = cva(``, {
  variants: {
    variant: {
      default: `border-gray-1 disabled:opacity-2 disabled:text-gray-5 disabled:bg-gray-disabled focus:border-gray-1 block w-full border bg-gray-50 px-2.5 py-2 text-sm text-black-0 focus:border focus:outline-none`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// 텍스트 인풋
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  label?: string;
}

export const InputText: FC<InputProps> = ({
  variant,
  id,
  label,
  className,
  ...props
}) => {
  return (
    <>
      {props.type !== "radio" ? (
        <input
          id={id}
          type={props.type}
          className={cn(InputVariants({ variant }), className)}
          {...props}
        />
      ) : (
        <div className="flex items-center space-x-4">
          <label className="inline-flex cursor-pointer items-center">
            <input type="radio" className="peer sr-only" name="option" />
            <div className="peer-checked:before:conetnet-[''] relative mr-2 h-4 w-4 rounded-full border border-gray-5 bg-white transition-all peer-checked:before:absolute peer-checked:before:left-1/2 peer-checked:before:top-1/2 peer-checked:before:h-2 peer-checked:before:w-2 peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%] peer-checked:before:rounded-full peer-checked:before:bg-gray-5"></div>
            <span className="text-black text-14 font-light">{label}</span>
          </label>
        </div>
      )}
    </>
  );
};
