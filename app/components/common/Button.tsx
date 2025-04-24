"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

import { cn } from "@/lib/clsx"; // 절대 경로 설정 시 스토리북 에러로 인해 상대경로로 수정

const ButtonVariants = cva(``, {
  variants: {
    variant: {
      default:
        "bg-white text-black-0 active:bg-gray-disabled hover:bg-gray-disabled border border-gray-3 hover:border hover:border-gray-5 disabled:bg-gray-6 disabled:hover:cursor-default disabled:text-gray-5 disabled:hover:border disabled:hover:border-gray-3",
    },
    shape: {
      square: "rounded-none",
      primary: "rounded",
      full: "rounded-full",
    },
    width: {
      full: "w-[100%]",
    },
    size: {
      small: "text-sm p-2",
      medium: "text-base py-2 px-6",
      large: "text-lg py-3 px-6",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant,
  shape,
  size,
  width,
  weight,
  children,
  className,
  ...props
}) => {
  return (
    <button
      disabled={props.disabled}
      className={cn(
        ButtonVariants({ variant, width, shape, size, weight }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
