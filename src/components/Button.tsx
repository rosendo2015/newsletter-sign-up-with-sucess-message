interface ButtonProps extends React.ComponentProps<"button"> {
    children: string

}
export function Button({ children, ...rest }: ButtonProps) {
    return (
        <button type="submit" {...rest} className="w-full flex items-center justify-center p-3 bg-[var(--Blue-800)] rounded-lg my-6 text-white font-bold cursor-pointer transition duration-700 ease-in-out hover:bg-gradient-to-r hover:from-[var(--Pink)] hover:to-[var(--Red)] hover:shadow-lg hover:shadow-red-600/50">
            {children}
        </button>
    )
}