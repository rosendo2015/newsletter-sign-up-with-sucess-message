interface ButtonProps {
    children: string
}
export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button type="submit" {...rest} className="w-full flex items-center justify-center p-5 bg-[var(--Blue-800)] rounded-lg mt-6 mb-10 text-white font-bold cursor-pointer transition duration-700 hover:bg-gradient-to-r from-[var(--Pink)] to-[var(--Red)]">
            {children}
        </button>
    )
}