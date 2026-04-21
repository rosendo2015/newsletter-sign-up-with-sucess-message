type TitleProps = {
    children: string
}
export function Title({ children }: TitleProps) {
    return (
        <h1 className="flex items-center font-bold mt-8 mb-6 text-4xl text-[var(--Blue-800)]">{children}</h1>
    )
}