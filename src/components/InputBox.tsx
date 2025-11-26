interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputBox = ({ label, className = "", ...props }: InputBoxProps) => {
  return (
    <div className="flex flex-col gap-1 w-full max-w-md">
      {label && <label className="text-sm font-bold text-black">{label}</label>}
      <input
        className={`px-4 py-2 border-2 border-black rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] selection:bg-black selection:text-white ${className}`}
        {...props}
      />
    </div>
  );
};

