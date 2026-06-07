"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonPrimary({ children, className = "", ...props }: ButtonPrimaryProps) {
  return (
    <button className={`btn btn-primary ${className}`} {...props}>
      {children}
    </button>
  );
}
