import { forwardRef } from 'react';

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

const variantStyles = {
  solid: 'bg-blue-600 text-white hover:text-blue-800 hover:bg-blue-200',
  outline: 'border-2 bg-white border-blue-600 text-blue-800 hover:bg-blue-50',
  ghost: 'text-blue-600 hover:bg-blue-50'
};

const Button = forwardRef(({
  children,
  className = '',
  size = 'md',
  variant = 'solid',
  isLoading = false,
  startIcon,
  endIcon,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={isLoading}
      className={`
        inline-flex items-center justify-center
        rounded-md font-medium
        duration-200
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!isLoading && startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {!isLoading && endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;