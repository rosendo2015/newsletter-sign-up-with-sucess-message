import type React from "react";

interface InputProps extends React.ComponentProps<"input"> {
    label: string,
    error?: string
}

export function Input({ label, type = "text", error, ...rest }: InputProps) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <label
                    htmlFor={rest.id ?? label.toLowerCase()}
                    className="text-sm font-bold text-[var(--Blue-800)] mb-2"
                >
                    {label}
                </label>
                {error && (
                    <span className="text-red-600 text-xs">{error}</span>
                )}
            </div>
            <input
                {...rest}
                id={rest.id ?? label.toLowerCase()}
                type={type} // usa o type vindo da prop
                placeholder="email@company.com"
                className={`border  rounded-lg h-16 px-6
                    ${error
                        ? "border-red-600 bg-red-100 text-red-600 focus:bg-red-100 focus:outline-red-400"
                        : "border-[var(--Gray)] bg-white focus:border-[va(--Blue-00)]"}
                    `}
            />
        </div>
    );
}
