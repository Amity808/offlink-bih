import {  cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const inputVariants = cva(
  'relative px-4 py-3 flex items-center justify-center gap-3 w-fit h-[48px] rounded-[10px] font-manropeL text-dark-100 hide-caret transition-all select-none focus-within:border-brand-green-primary ',
  {
    variants: {
      intent: {
        default: 'border-solid border-[2px] border-white-400 text-dark-600 ',
        primary: 'border-solid border-[2px] focus-within:text-dark-100 text-white-400 ',
      },
      inputSize: {
        sm: 'text-sm py-2',
        md: 'text-base py-3',
        lg: 'text-lg py-4',
      },
    },
    defaultVariants: {
      intent: 'default',
      inputSize: 'sm',
    },
  },
);


export function Input({
  className,
  leftIcon,
  value,
  rightIcon,
  type,
  isLoading,
  iconColor,
  iconSize,
  disabled,
  onChange,
  placeHolder,
  intent,
  error,
  inputSize,
  ...props
}) {

  return (
    <div>
      {leftIcon && leftIcon}
      <input
        onChange={onChange}
        type={type}
        className={className}
        placeholder={placeHolder ?? 'Placeholder'}
        disabled={isLoading ?? disabled}
        {...props}
      />
      {rightIcon && rightIcon}
      {error && value && <div className="text-red-900 text-sm">{error}</div>}
    </div>
  );
}
