export default function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`font-medium transition duration-200 ease-in-out cursor-pointer border border-gray-300 px-4 py-2 rounded-md text-sm ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  