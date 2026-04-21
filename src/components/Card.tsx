type CardProps = {
    children: string
    svgSrc?: string
}
export function Card({ svgSrc, children }: CardProps) {
    return (
        <div className="flex items-start mb-4">
            {svgSrc && (
                <img src={svgSrc} alt="icon" className="mr-3" />
            )}
            <p className="text-[var(--Blue-700)] font-medium">{children}</p>
        </div>
    )
}